import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { oauthSignIn, getSupabase, emailSignUp } from "@/lib/supabaseClient";
import { Facebook, ArrowLeft } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";
import { useState } from "react";

function GoogleIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.4-1.66 4.1-5.5 4.1-3.31 0-6-2.7-6-6s2.69-6 6-6c1.89 0 3.16.8 3.89 1.5l2.65-2.56C16.67 3.2 14.52 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.77 0 9.61-4.05 9.61-9.77 0-.66-.07-1.1-.16-1.6H12z"
      />
    </svg>
  );
}

type AuthMode = "choice" | "login" | "signup";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || "/";
  const { socialLogin, signUp } = useAuth();
  const [mode, setMode] = useState<AuthMode>("choice");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onProvider = async (provider: "google" | "facebook") => {
    try {
      setLoading(true);
      const supa = getSupabase();
      if (!supa) {
        // Mock OAuth locally for now
        const mockEmail =
          provider === "google"
            ? "user.google@example.com"
            : "user.facebook@example.com";
        socialLogin(mockEmail);
        toast.success(`Signed in with ${provider}`);
        navigate(from, { replace: true });
        return;
      }
      await oauthSignIn(provider);
      // Supabase will redirect; this is mainly for safety
      navigate(from, { replace: true });
    } catch (e: any) {
      toast.error(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const supa = getSupabase();
      if (!supa) {
        // Mock signup locally
        await signUp(email, password);
        toast.success("Account created successfully!");
        navigate(from, { replace: true });
        return;
      }
      // Real Supabase signup
      const { error } = await emailSignUp(email, password);
      if (error) throw error;
      toast.success("Check your email to confirm your account");
      setEmail("");
      setPassword("");
      setMode("choice");
    } catch (e: any) {
      toast.error(e?.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const supa = getSupabase();
      if (!supa) {
        // Mock login locally
        socialLogin(email);
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
        return;
      }
      // Real Supabase login
      const { error } = await supa.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (e: any) {
      toast.error(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen grid place-items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1495653797063-114787b77b23?q=80&w=2070&auto=format&fit=crop)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background/90"
        aria-hidden
      />

      <div className="relative mx-auto max-w-md rounded-xl border bg-card/90 backdrop-blur p-6 shadow-lg text-center">
        {mode === "choice" && (
          <>
            <h1 className="text-2xl font-bold tracking-tight">Welcome</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in or create an account to continue to Petal & Stem.
            </p>
            <div className="mt-6 grid gap-3">
              <Button
                onClick={() => setMode("login")}
                className="w-full"
                variant="default"
              >
                Login
              </Button>
              <Button
                onClick={() => setMode("signup")}
                className="w-full"
                variant="outline"
              >
                Sign Up
              </Button>
            </div>
          </>
        )}

        {mode === "login" && (
          <>
            <div className="relative mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMode("choice")}
                disabled={loading}
                className="absolute left-0 top-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-bold tracking-tight text-center">Login</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Sign in to your account
            </p>
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-4 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card/90 px-2 text-muted-foreground">Or</span>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <Button
                onClick={() => onProvider("google")}
                variant="secondary"
                className="w-full"
                disabled={loading}
              >
                <GoogleIcon />
                <span>Google</span>
              </Button>
              <Button
                onClick={() => onProvider("facebook")}
                variant="secondary"
                className="w-full"
                disabled={loading}
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </Button>
            </div>
          </>
        )}

        {mode === "signup" && (
          <>
            <div className="relative mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMode("choice")}
                disabled={loading}
                className="absolute left-0 top-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-bold tracking-tight text-center">Sign Up</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Create a new account
            </p>
            <form onSubmit={handleSignUp} className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
            <div className="mt-4 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card/90 px-2 text-muted-foreground">Or</span>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <Button
                onClick={() => onProvider("google")}
                variant="secondary"
                className="w-full"
                disabled={loading}
              >
                <GoogleIcon />
                <span>Google</span>
              </Button>
              <Button
                onClick={() => onProvider("facebook")}
                variant="secondary"
                className="w-full"
                disabled={loading}
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
