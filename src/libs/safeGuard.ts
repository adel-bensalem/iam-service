import { SafeGuard } from "@core";
import bcrypt from "bcryptjs";

function createSafeGuard(tokenSecret: string): SafeGuard {
  return {
    ensureUserPassword(password, accountPassword) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(password, accountPassword).then((res) =>
          res
            ? resolve()
            : reject({
                unAuthorizedOperation: true,
              })
        )
      );
    },
  };
}

export { createSafeGuard };
