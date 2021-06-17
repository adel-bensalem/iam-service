import { TokenProvider } from "@core";
import jwt from "jsonwebtoken";

function createTokenProvider(secret: string): TokenProvider {
  return {
    provideToken(user) {
      return Promise.resolve(jwt.sign(user.name, secret));
    },
  };
}

export { createTokenProvider };
