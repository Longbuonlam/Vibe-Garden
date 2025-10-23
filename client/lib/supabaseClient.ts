import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

/**
 * Get Supabase client instance
 *
 * Requires these environment variables to be set in your .env file or deployment:
 * - VITE_SUPABASE_URL: Your Supabase project URL (from https://app.supabase.com/project/_/settings/api)
 * - VITE_SUPABASE_ANON_KEY: Your Supabase anonymous key (from https://app.supabase.com/project/_/settings/api)
 *
 * If not configured, the app will use mock authentication as fallback.
 */
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

export async function emailSignUp(email: string, password: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Supabase not configured");
  return supabase.auth.signUp({ email, password });
}
