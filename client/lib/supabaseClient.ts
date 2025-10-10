import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

export function getSupabase(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  if (!url || !anon) return null;
  return createClient(url, anon);
}

export async function oauthSignIn(provider: "google" | "facebook") {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Supabase not configured");
  const redirectTo = window.location.origin + "/";
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo },
  });
  if (error) throw error;
}
