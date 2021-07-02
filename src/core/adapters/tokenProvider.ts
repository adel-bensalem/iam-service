import { Identifiable, User } from "@types";

interface TokenProvider {
  provideToken(user: Identifiable<User>): Promise<string>;
}

export { TokenProvider };
