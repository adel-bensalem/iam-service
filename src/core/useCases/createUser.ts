import { User, UserCreationError } from "@types";
import { validateUser } from "../entities/userValidator";
import { Presenter } from "../adapters/presenter";
import { PasswordEncryptor } from "../adapters/passwordEncryptor";
import { Repository } from "../adapters/repository";

type UserCreationInteractor = (user: User) => void;

function createUserCreationInteractor(
  encryptor: PasswordEncryptor,
  repository: Repository,
  presenter: Presenter
): UserCreationInteractor {
  return (user) => {
    const error: UserCreationError = {
      doesUserAlreadyExists: false,
      wasPermissionDenied: false,
      ...validateUser(user),
    };

    !error.hasInvalidName && !error.hasInvalidPassword
      ? repository
          .findUserByName(user.name)
          .then((user) =>
            presenter.presentUserCreationFailure(
              { ...error, doesUserAlreadyExists: true },
              user
            )
          )
          .catch(() =>
            encryptor
              .encryptPassword(user.password)
              .then((password) => repository.saveUser({ ...user, password }))
              .then(presenter.presentUserCreationSuccess)
              .catch(() => presenter.presentUserCreationFailure(error, user))
          )
      : presenter.presentUserCreationFailure(error, user);
  };
}

export { createUserCreationInteractor, UserCreationInteractor };
