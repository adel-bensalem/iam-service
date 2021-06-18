import {
  AuthenticationError,
  Credentials,
  Group,
  GroupCreationError,
  Identifiable,
  User,
  UserCreationError,
} from "@types";

interface Presenter {
  presentGroupCreationSuccess(group: Identifiable<Group>): void;
  presentGroupCreationFailure(error: GroupCreationError, group: Group): void;
  presentUserCreationSuccess(user: Identifiable<User>): void;
  presentUserCreationFailure(error: UserCreationError, user: User): void;
  presentAuthenticationSuccess(token: string): void;
  presentAuthenticationFailure(
    error: AuthenticationError,
    credentials: Credentials
  ): void;
}

export { Presenter };
