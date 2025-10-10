import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { oauthSignIn, getSupabase } from "@/lib/supabaseClient";
import { Facebook } from "lucide-react";

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

  const onProvider = async (provider: "google" | "facebook") => {
    try {
      const supa = getSupabase();
      if (!supa) {
        toast.error("Connect Supabase and set VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY");
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
    <section className="container py-24">
      <div className="mx-auto max-w-md rounded-lg border bg-card p-6 shadow-sm text-center">
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
