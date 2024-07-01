import { type User } from "@supabase/supabase-js";
import { createClient } from "./supabase/serverClient";

export async function currentUser(): Promise<User> {
  const supabase = createClient();
  const res = await supabase.auth.getUser();

  if (!res.error && res.data) {
    return res.data.user;
  }

  console.error(res.error);
  throw res.error?.message ?? "An error occurred while fetching user data";
}
