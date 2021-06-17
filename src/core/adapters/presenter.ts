import {
  AuthenticationError,
  Credentials,
  Identifiable,
  User,
  UserCreationError,
} from "@types";

interface Presenter {
  presentUserCreationSuccess(user: Identifiable<User>): void;
  presentUserCreationFailure(error: UserCreationError, user: User): void;
  presentAuthenticationSuccess(token: string): void;
  presentAuthenticationFailure(
    error: AuthenticationError,
    credentials: Credentials
  ): void;
}

export { Presenter };
