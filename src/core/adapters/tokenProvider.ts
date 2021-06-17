import { User } from "@types";

interface TokenProvider {
  provideToken(user: User): Promise<string>;
}

export { TokenProvider };
