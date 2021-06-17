import { Presenter } from "./adapters/presenter";
import { Repository } from "./adapters/repository";
import { PasswordEncryptor } from "./adapters/passwordEncryptor";
import {
  createUserCreationInteractor,
  UserCreationInteractor,
} from "./useCases/createUser";

type Core = {
  createUser: UserCreationInteractor;
};

type DependenciesMap = {
  presenter: Presenter;
  repository: Repository;
  passwordEncryptor: PasswordEncryptor;
};

function createCore(dependencies: DependenciesMap): Core {
  return {
    createUser: createUserCreationInteractor(
      dependencies.passwordEncryptor,
      dependencies.repository,
      dependencies.presenter
    ),
  };
}

export { createCore, Core, Repository, Presenter, PasswordEncryptor };
