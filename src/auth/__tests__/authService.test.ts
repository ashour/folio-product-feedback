import { describe, expect, it } from "vitest";
import { AuthService } from "../authService";
import { IAuthProvider, UserResponse } from "../types";

describe("authService", () => {
  it("ensures user is authenticated", async () => {
    const providerWithUser: IAuthProvider = {
      currentUser: function (): Promise<UserResponse> {
        return Promise.resolve({ user: { id: "foo" }, error: null });
      },
    };
    const withUser = new AuthService(providerWithUser);

    const user = await withUser.currentUser();

    expect(user.id).toBe("foo");

    const providerWithoutUser: IAuthProvider = {
      currentUser: function (): Promise<UserResponse> {
        return Promise.resolve({
          user: null,
          error: new Error("User not found"),
        });
      },
    };

    const withoutUser = new AuthService(providerWithoutUser);

    expect(async () => withoutUser.currentUser()).rejects.toThrowError(
      "User not found",
    );
  });
});
