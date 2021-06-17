import { Credentials } from "@types";
import { Repository } from "../adapters/repository";
import { TokenProvider } from "../adapters/tokenProvider";
import { Presenter } from "../adapters/presenter";
import { SafeGuard } from "../adapters/safeGuard";

type AuthenticationInteractor = (credentials: Credentials) => void;

function createAuthenticationInteractor(
  repository: Repository,
  tokenProvider: TokenProvider,
  safeGuard: SafeGuard,
  presenter: Presenter
): AuthenticationInteractor {
  return (credentials) =>
    repository
      .findUserByName(credentials.name)
      .then((user) =>
        safeGuard
          .ensureUserPassword(credentials.password, user.password)
          .then(() => user)
      )
      .then(tokenProvider.provideToken)
      .then(presenter.presentAuthenticationSuccess)
      .catch((e) =>
        presenter.presentAuthenticationFailure(
          {
            unAuthorizedOperation: e.unAuthorizedOperation,
            hasUnExpectedError: !e.unAuthorizedOperation,
          },
          credentials
        )
      );
}

export { createAuthenticationInteractor, AuthenticationInteractor };
