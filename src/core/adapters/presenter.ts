import {
  AuthenticationError,
  Credentials,
  Group,
  GroupCreationError,
  Id,
  Identifiable,
  Policy,
  PolicySetError,
  Resource,
  User,
  UserCreationError,
  UserFromGroupRemovalError,
  UserPermissionGrantError,
  UserToGroupAdditionError,
  Permission,
  GroupPermissionGrantError,
  UserPolicyGrantError,
  GroupPolicyGrantError,
  UserPermissionInsuranceError,
  UserPermissionsRetrievalError,
  AccessibleResourcesRetrievalError,
  ResourcesRetrievalFilter,
} from "@types";

interface Presenter {
  presentAccessibleResourcesRetrievalSuccess(
    resources: Identifiable<Resource>[]
  ): void;
  presentAccessibleResourcesRetrievalFailure(
    error: AccessibleResourcesRetrievalError,
    filter: ResourcesRetrievalFilter
  ): void;
  presentGroupPermissionGrantSuccess(
    group: Identifiable<Group>,
    resource: Resource,
    permission: Permission
  ): void;
  presentGroupPermissionGrantFailure(
    error: GroupPermissionGrantError,
    groupId: Id,
    resource: Resource,
    permission: Permission
  ): void;
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
  presentPolicySetSuccess(policy: Policy): void;
  presentPolicySetFailure(error: PolicySetError, policy: Policy): void;
  presentUserPolicyGrantSuccess(user: Identifiable<User>, policy: Policy): void;
  presentUserPolicyGrantFailure(
    error: UserPolicyGrantError,
    userId: Id,
    policyName: string
  ): void;
  presentGroupPolicyGrantSuccess(
    group: Identifiable<Group>,
    policy: Policy
  ): void;
  presentGroupPolicyGrantFailure(
    error: GroupPolicyGrantError,
    groupId: Id,
    policyName: string
  ): void;
  presentUserPermissionInsuranceSuccess(
    user: Identifiable<User>,
    resource: Resource,
    intent: string
  ): void;
  presentUserPermissionInsuranceFailure(
    error: UserPermissionInsuranceError,
    userId: Id,
    resource: Resource,
    intent: string
  ): void;
  presentUserPermissionsRetrievalSuccess(
    permissions: { resource: Resource; permission: Permission }[]
  ): void;
  presentUserPermissionsRetrievalFailure(
    error: UserPermissionsRetrievalError,
    userId: Id
  ): void;
  presentAccountRetrievalSuccess(user: User): void;
  presentAccountRetrievalFailure(): void;
}

export { Presenter };
