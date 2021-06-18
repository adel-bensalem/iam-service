import { Group, Identifiable, User } from "@types";

interface Repository {
  findUserByName(name: string): Promise<Identifiable<User>>;
  saveUser(user: User): Promise<Identifiable<User>>;
  findGroupByName(name: string): Promise<Identifiable<Group>>;
  saveGroup(group: Group): Promise<Identifiable<Group>>;
}

export { Repository };