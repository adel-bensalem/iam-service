import { Id } from "@types";
import { Presenter, Repository } from "@core";

type UserFromGroupRemovalInteractor = (userId: Id, groupId: Id) => void;

function createUserFromGroupRemovalInteractor(
  repository: Repository,
  presenter: Presenter
): UserFromGroupRemovalInteractor {
  return (userId, groupId) => {
    repository
      .findUserById(userId)
      .then((user) =>
        repository
          .findGroupById(groupId)
          .then((group) =>
            repository
              .removeUserFromGroup(group, user)
              .then(() =>
                presenter.presentUserFromGroupRemovalSuccess(user, group)
              )
          )
          .catch(() =>
            presenter.presentUserFromGroupRemovalFailure(
              {
                wasGroupNotFound: true,
                wasPermissionDenied: false,
                wasUserNotFound: false,
              },
              userId,
              groupId
            )
          )
      )
      .catch(() =>
        presenter.presentUserFromGroupRemovalFailure(
          {
            wasGroupNotFound: false,
            wasPermissionDenied: false,
            wasUserNotFound: true,
          },
          userId,
          groupId
        )
      );
  };
}

export { createUserFromGroupRemovalInteractor, UserFromGroupRemovalInteractor };
