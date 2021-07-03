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
          .then(() => tokenProvider.provideToken(user))
          .then(presenter.presentAuthenticationSuccess)
          .catch(() =>
            presenter.presentAuthenticationFailure(
              {
                wasAccountNotFound: false,
                unAuthorizedOperation: true,
                hasUnExpectedError: false,
              },
              credentials
            )
          )
      )
      .catch((e) =>
        presenter.presentAuthenticationFailure(
          {
            wasAccountNotFound: true,
            unAuthorizedOperation: false,
            hasUnExpectedError: false,
            ...e,
          },
          credentials
        )
      );
}

export { createAuthenticationInteractor, AuthenticationInteractor };
