import { Id, ResourcesRetrievalFilter } from "@types";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";

type AccessibleResourcesRetrievalInteractor = (
  userId: Id,
  filter: ResourcesRetrievalFilter
) => void;

function createAccessibleResourcesRetrievalInteractor(
  repository: Repository,
  presenter: Presenter
): AccessibleResourcesRetrievalInteractor {
  return (userId, filter) =>
    repository
      .findUserById(userId)
      .then((user) =>
        repository
          .getUserAccessibleResources(user, filter)
          .then(presenter.presentAccessibleResourcesRetrievalSuccess)
          .catch(() =>
            presenter.presentAccessibleResourcesRetrievalFailure(
              { wasUserNotFound: false, hasUnExpectedError: true },
              filter
            )
          )
      )
      .catch(() =>
        presenter.presentAccessibleResourcesRetrievalFailure(
          { wasUserNotFound: true, hasUnExpectedError: false },
          filter
        )
      );
}

export {
  createAccessibleResourcesRetrievalInteractor,
  AccessibleResourcesRetrievalInteractor,
};
