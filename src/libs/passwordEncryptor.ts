import { PasswordEncryptor } from "@core";
import bcrypt from "bcryptjs";

function createPasswordEncryptor(): PasswordEncryptor {
  return {
    encryptPassword(password) {
      return new Promise((resolve, reject) =>
        bcrypt.genSalt(10, (err, salt) =>
          err
            ? reject(err)
            : bcrypt.hash(password, salt, (err, hash) =>
                err ? reject(err) : resolve(hash)
              )
        )
      );
    },
  };
}

export { createPasswordEncryptor };
