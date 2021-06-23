import { Presenter } from "./adapters/presenter";
import { Repository } from "./adapters/repository";
import { PasswordEncryptor } from "./adapters/passwordEncryptor";
import { TokenProvider } from "./adapters/tokenProvider";
import { SafeGuard } from "./adapters/safeGuard";
import { RuleBook } from "./adapters/ruleBook";
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
import {
  createPolicySetInteractor,
  PolicySetInteractor,
} from "./useCases/setPolicy";
import {
  createGroupPermissionGrantInteractor,
  GroupPermissionGrantInteractor,
} from "./useCases/grantGroupPermission";
import {
  createUserPolicyGrantInteractor,
  UserPolicyGrantInteractor,
} from "./useCases/grantUserPolicy";
import {
  createGroupPolicyGrantInteractor,
  GroupPolicyGrantInteractor,
} from "./useCases/grantGroupPolicy";
import {
  createUserPermissionInsuranceInteractor,
  UserPermissionInsuranceInteractor,
} from "./useCases/ensureUserPermission";

type Core = {
  createUser: UserCreationInteractor;
  authenticate: AuthenticationInteractor;
  createGroup: GroupCreationInteractor;
  addUserToGroup: UserToGroupAdditionInteractor;
  removeUserFromGroup: UserFromGroupRemovalInteractor;
  grantUserPermission: UserPermissionGrantInteractor;
  setPolicy: PolicySetInteractor;
  grantGroupPermission: GroupPermissionGrantInteractor;
  grantUserPolicy: UserPolicyGrantInteractor;
  grantGroupPolicy: GroupPolicyGrantInteractor;
  ensureUserPermission: UserPermissionInsuranceInteractor;
};

type DependenciesMap = {
  presenter: Presenter;
  repository: Repository;
  passwordEncryptor: PasswordEncryptor;
  tokenProvider: TokenProvider;
  safeGuard: SafeGuard;
  ruleBook: RuleBook;
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
    grantGroupPermission: createGroupPermissionGrantInteractor(
      dependencies.repository,
      dependencies.presenter
    ),
    setPolicy: createPolicySetInteractor(
      dependencies.ruleBook,
      dependencies.presenter
    ),
    grantUserPolicy: createUserPolicyGrantInteractor(
      dependencies.repository,
      dependencies.ruleBook,
      dependencies.presenter
    ),
    grantGroupPolicy: createGroupPolicyGrantInteractor(
      dependencies.repository,
      dependencies.ruleBook,
      dependencies.presenter
    ),
    ensureUserPermission: createUserPermissionInsuranceInteractor(
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
  RuleBook,
};
