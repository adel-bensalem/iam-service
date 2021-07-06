import {
  Group,
  Id,
  Identifiable,
  Resource,
  User,
  Permission,
  Policy,
  ResourcesRetrievalFilter,
} from "@types";

interface Repository {
  findUserByName(name: string): Promise<Identifiable<User>>;
  findUserById(id: Id): Promise<Identifiable<User>>;
  saveUser(user: User): Promise<Identifiable<User>>;
  findGroupByName(name: string): Promise<Identifiable<Group>>;
  findGroupById(id: Id): Promise<Identifiable<Group>>;
  saveGroup(group: Group): Promise<Identifiable<Group>>;
  addUserToGroup(
    group: Identifiable<Group>,
    user: Identifiable<User>
  ): Promise<void>;
  removeUserFromGroup(
    group: Identifiable<Group>,
    user: Identifiable<User>
  ): Promise<void>;
  saveUserPermissions(
    user: Identifiable<User>,
    resource: Resource,
    permissions: Permission
  ): Promise<Permission>;
  saveGroupPermissions(
    group: Identifiable<Group>,
    resource: Resource,
    permissions: Permission
  ): Promise<Permission>;
  saveUserPolicy(user: Identifiable<User>, policy: Policy): Promise<void>;
  saveGroupPolicy(group: Identifiable<Group>, policy: Policy): Promise<void>;
  getUserPermissions(
    user: Identifiable<User>
  ): Promise<{ resource: Resource; permission: Permission }[]>;
  getUserPermissionsOnResource(
    user: Identifiable<User>,
    resource: Resource
  ): Promise<Permission[]>;
  getUserAccessibleResources(
    user: Identifiable<User>,
    filter: ResourcesRetrievalFilter
  ): Promise<Identifiable<Resource>[]>;
}

export { Repository };
