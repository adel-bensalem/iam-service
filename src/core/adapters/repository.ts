import {
  Group,
  Id,
  Identifiable,
  Resource,
  User,
  Permission,
  Policy,
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
}

export { Repository };
