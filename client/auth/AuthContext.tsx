import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getSupabase } from "@/lib/supabaseClient";

interface User {
  email: string;
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  socialLogin: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const STORAGE_KEY = "auth_token";
const STORAGE_EMAIL = "auth_email";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      // Fallback: local token (legacy/simple auth)
      const token = localStorage.getItem(STORAGE_KEY);
      const email = localStorage.getItem(STORAGE_EMAIL);
      if (token && email) setUser({ email });

      // Supabase session (preferred)
      const supa = getSupabase();
      if (supa) {
        const { data } = await supa.auth.getUser();
        if (data.user?.email) setUser({ email: data.user.email });
        supa.auth.onAuthStateChange((_ev, session) => {
          if (session?.user?.email) setUser({ email: session.user.email });
          else setUser(null);
        });
      }
      setLoading(false);
    };
    bootstrap();
  }, []);

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required");
    const token = Math.random().toString(36).slice(2);
    localStorage.setItem(STORAGE_KEY, token);
    localStorage.setItem(STORAGE_EMAIL, email);
    setUser({ email });
  };

  const socialLogin = (email: string) => {
    localStorage.setItem(STORAGE_KEY, "mock_oauth");
    localStorage.setItem(STORAGE_EMAIL, email);
    setUser({ email });
  };

  const logout = async () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_EMAIL);
    const supa = getSupabase();
    if (supa) await supa.auth.signOut();
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, loading, login, socialLogin, logout }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
