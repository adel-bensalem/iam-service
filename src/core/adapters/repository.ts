import { Identifiable, User } from "@types";

interface Repository {
  findUserByName(name: string): Promise<Identifiable<User>>;
  saveUser(user: User): Promise<Identifiable<User>>;
}

export { Repository };
