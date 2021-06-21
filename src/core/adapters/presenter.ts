import {
  AuthenticationError,
  Credentials,
  Group,
  GroupCreationError,
  Id,
  Identifiable,
  Resource,
  User,
  UserCreationError,
  UserFromGroupRemovalError,
  UserPermissionGrantError,
  UserToGroupAdditionError,
} from "@types";
import { Permission } from "../../types/permission";

interface Presenter {
  presentUserPermissionGrantSuccess(
    user: Identifiable<User>,
    resource: Resource,
    permission: Permission
  ): void;
  presentUserPermissionGrantFailure(
    error: UserPermissionGrantError,
    userId: Id,
    resource: Resource,
    permission: Permission
  ): void;
  presentGroupCreationSuccess(group: Identifiable<Group>): void;
  presentGroupCreationFailure(error: GroupCreationError, group: Group): void;
  presentUserToGroupAdditionSuccess(
    user: Identifiable<User>,
    group: Identifiable<Group>
  ): void;
  presentUserToGroupAdditionFailure(
    error: UserToGroupAdditionError,
    userId: Id,
    groupId: Id
  ): void;
  presentUserFromGroupRemovalSuccess(
    user: Identifiable<User>,
    group: Identifiable<Group>
  ): void;
  presentUserFromGroupRemovalFailure(
    error: UserFromGroupRemovalError,
    userId: Id,
    groupId: Id
  ): void;
  presentUserCreationSuccess(user: Identifiable<User>): void;
  presentUserCreationFailure(error: UserCreationError, user: User): void;
  presentAuthenticationSuccess(token: string): void;
  presentAuthenticationFailure(
    error: AuthenticationError,
    credentials: Credentials
  ): void;
}

export { Presenter };
