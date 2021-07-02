import { User } from "@types";

interface TokenDecoder {
  decodeToken(token: string): Promise<User>;
}

export { TokenDecoder };
