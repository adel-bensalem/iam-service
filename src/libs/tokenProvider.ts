import { TokenProvider } from "@core";
import jwt from "jsonwebtoken";

function createTokenProvider(secret: string): TokenProvider {
  return {
    provideToken({ id, name }) {
      return Promise.resolve(jwt.sign({ id, name }, secret));
    },
  };
}

export { createTokenProvider };
