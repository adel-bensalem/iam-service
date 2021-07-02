import { TokenProvider } from "@core";
import jwt from "jsonwebtoken";

function createTokenProvider(secret: string): TokenProvider {
  return {
    provideToken({ name }) {
      return Promise.resolve(jwt.sign({ name }, secret));
    },
  };
}

export { createTokenProvider };
