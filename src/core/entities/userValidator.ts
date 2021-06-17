import { User } from "@types";

function validateUser(user: User): {
  hasInvalidName: boolean;
  hasInvalidPassword: boolean;
} {
  return {
    hasInvalidName: !user.name,
    hasInvalidPassword: !user.password,
  };
}

export { validateUser };
