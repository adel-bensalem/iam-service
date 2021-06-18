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
import {
  createGroupCreationInteractor,
  GroupCreationInteractor,
} from "./useCases/createGroup";

type Core = {
  createUser: UserCreationInteractor;
  authenticate: AuthenticationInteractor;
  createGroup: GroupCreationInteractor;
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
    createGroup: createGroupCreationInteractor(
      dependencies.repository,
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
