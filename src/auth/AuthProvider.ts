import { createClient } from "@/lib/supabase/serverClient";
import { IAuthProvider, UserResponse } from "./types";

export class AuthProvider implements IAuthProvider {
  async currentUser(): Promise<UserResponse> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return { user: null, error };
    }

    return { user: data.user, error: null };
  }
}
