import { Presenter } from "./adapters/presenter";
import { Repository } from "./adapters/repository";
import { PasswordEncryptor } from "./adapters/passwordEncryptor";
import { TokenProvider } from "./adapters/tokenProvider";
import { SafeGuard } from "./adapters/safeGuard";
import {
  createUserCreationInteractor,
  UserCreationInteractor,
} from "./useCases/createUser";
import {
  createAuthenticationInteractor,
  AuthenticationInteractor,
} from "./useCases/authenticate";

type Core = {
  createUser: UserCreationInteractor;
  authenticate: AuthenticationInteractor;
};

type DependenciesMap = {
  presenter: Presenter;
  repository: Repository;
  passwordEncryptor: PasswordEncryptor;
  tokenProvider: TokenProvider;
  safeGuard: SafeGuard;
};

function createCore(dependencies: DependenciesMap): Core {
  return {
    createUser: createUserCreationInteractor(
      dependencies.passwordEncryptor,
      dependencies.repository,
      dependencies.presenter
    ),
    authenticate: createAuthenticationInteractor(
      dependencies.repository,
      dependencies.tokenProvider,
      dependencies.safeGuard,
      dependencies.presenter
    ),
  };
}

export {
  createCore,
  Core,
  Repository,
  Presenter,
  PasswordEncryptor,
  TokenProvider,
  SafeGuard,
};
