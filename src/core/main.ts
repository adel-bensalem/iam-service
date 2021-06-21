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
import {
  createUserToGroupAdditionInteractor,
  UserToGroupAdditionInteractor,
} from "./useCases/addUserToGroup";
import {
  createUserFromGroupRemovalInteractor,
  UserFromGroupRemovalInteractor,
} from "./useCases/removeUserFromGroup";
import {
  createUserPermissionGrantInteractor,
  UserPermissionGrantInteractor,
} from "./useCases/grantUserPermission";

type Core = {
  createUser: UserCreationInteractor;
  authenticate: AuthenticationInteractor;
  createGroup: GroupCreationInteractor;
  addUserToGroup: UserToGroupAdditionInteractor;
  removeUserFromGroup: UserFromGroupRemovalInteractor;
  grantUserPermission: UserPermissionGrantInteractor;
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
    addUserToGroup: createUserToGroupAdditionInteractor(
      dependencies.repository,
      dependencies.presenter
    ),
    removeUserFromGroup: createUserFromGroupRemovalInteractor(
      dependencies.repository,
      dependencies.presenter
    ),
    grantUserPermission: createUserPermissionGrantInteractor(
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
