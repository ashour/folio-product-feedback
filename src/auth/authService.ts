import { AuthProvider } from "./AuthProvider";
import { IAuthProvider, User } from "./types";

let _instance: AuthService | null = null;
export function auth(): AuthService {
  if (!_instance) {
    _instance = new AuthService(new AuthProvider());
  }
  return _instance;
}

export class AuthService {
  constructor(private readonly authProvider: IAuthProvider) {}

  async currentUser(): Promise<User> {
    const { error, user } = await this.authProvider.currentUser();

    if (error) {
      console.error(error);
      throw error;
    }

    return user;
  }
}
