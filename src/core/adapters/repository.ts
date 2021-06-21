import { Group, Id, Identifiable, User } from "@types";

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
}

export { Repository };
