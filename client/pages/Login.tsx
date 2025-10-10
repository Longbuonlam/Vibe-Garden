import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation() as any;

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await login(email, password);
      toast.success("Welcome back!");
      navigate(from, { replace: true });
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container py-20">
      <div className="mx-auto max-w-md rounded-lg border bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">Login</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to continue to Petal & Stem.
        </p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={4}
              required
            />
          </div>
          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </section>
  );
}
