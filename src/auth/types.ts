export type User = {
  id: string;
};

export type UserResponse =
  | {
      user: User;
      error: null;
    }
  | {
      user: null;
      error: Error;
    };

export interface IAuthProvider {
  currentUser(): Promise<UserResponse>;
}
