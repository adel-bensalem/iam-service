import jwt from "jsonwebtoken";
import { TokenDecoder } from "@core";
import { User } from "@types";

function createTokenDecoder(secret: string): TokenDecoder {
  return {
    decodeToken(token) {
      return new Promise((resolve, reject) =>
        jwt.verify(token, secret, (err, decoded) =>
          err || !decoded ? reject(err) : resolve(decoded as User)
        )
      );
    },
  };
}

export { createTokenDecoder };
