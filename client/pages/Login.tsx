import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { oauthSignIn, getSupabase } from "@/lib/supabaseClient";
import { Facebook } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";

function GoogleIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.66 4.1-5.5 4.1-3.31 0-6-2.7-6-6s2.69-6 6-6c1.89 0 3.16.8 3.89 1.5l2.65-2.56C16.67 3.2 14.52 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.77 0 9.61-4.05 9.61-9.77 0-.66-.07-1.1-.16-1.6H12z"/>
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || "/";
  const { socialLogin } = useAuth();

  const onProvider = async (provider: "google" | "facebook") => {
    try {
      const supa = getSupabase();
      if (!supa) {
        // Mock OAuth locally for now
        const email = provider === "google" ? "user.google@example.com" : "user.facebook@example.com";
        socialLogin(email);
        toast.success(`Signed in with ${provider}`);
        navigate(from, { replace: true });
        return;
      }
      await oauthSignIn(provider);
      // Supabase will redirect; this is mainly for safety
      navigate(from, { replace: true });
    } catch (e: any) {
      toast.error(e?.message || "Login failed");
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background/90" aria-hidden />

      <div className="relative mx-auto max-w-md rounded-xl border bg-card/90 backdrop-blur p-6 shadow-lg text-center">
        <h1 className="text-2xl font-bold tracking-tight">Login</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to continue to Petal & Stem.</p>
        <div className="mt-6 grid gap-3">
          <Button onClick={() => onProvider("google")} className="w-full" variant="secondary">
            <GoogleIcon />
            <span>Continue with Google</span>
          </Button>
          <Button onClick={() => onProvider("facebook")} className="w-full" variant="secondary">
            <Facebook className="h-5 w-5" />
            <span>Continue with Facebook</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
