import { TokenDecoder } from "../adapters/tokenDecoder";
import { Presenter } from "../adapters/presenter";

type AccountRetrievalInteractor = (token: string) => void;

function createAccountRetrievalInteractor(
  decoder: TokenDecoder,
  presenter: Presenter
): AccountRetrievalInteractor {
  return (token) =>
    decoder
      .decodeToken(token)
      .then(presenter.presentAccountRetrievalSuccess)
      .catch(presenter.presentAccountRetrievalFailure);
}

export { createAccountRetrievalInteractor, AccountRetrievalInteractor };
