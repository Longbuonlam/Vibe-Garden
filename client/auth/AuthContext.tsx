import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface User {
  email: string;
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const STORAGE_KEY = "auth_token";
const STORAGE_EMAIL = "auth_email";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY);
    const email = localStorage.getItem(STORAGE_EMAIL);
    if (token && email) {
      setUser({ email });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required");
    // Simulate auth; accept any non-empty credentials
    const token = Math.random().toString(36).slice(2);
    localStorage.setItem(STORAGE_KEY, token);
    localStorage.setItem(STORAGE_EMAIL, email);
    setUser({ email });
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_EMAIL);
    setUser(null);
  };

  const value = useMemo(() => ({ user, loading, login, logout }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
