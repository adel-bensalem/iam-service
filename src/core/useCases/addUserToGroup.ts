import { Id } from "@types";
import { Presenter } from "../adapters/presenter";
import { Repository } from "../adapters/repository";

type UserToGroupAdditionInteractor = (userId: Id, groupId: Id) => void;

function createUserToGroupAdditionInteractor(
  repository: Repository,
  presenter: Presenter
): UserToGroupAdditionInteractor {
  return (userId, groupId) => {
    repository
      .findUserById(userId)
      .then((user) =>
        repository
          .findGroupById(groupId)
          .then((group) =>
            repository
              .addUserToGroup(group, user)
              .then(() =>
                presenter.presentUserToGroupAdditionSuccess(user, group)
              )
          )
          .catch((e) => {
            console.log(e);
            presenter.presentUserToGroupAdditionFailure(
              {
                wasGroupNotFound: true,
                wasPermissionDenied: false,
                wasUserNotFound: false,
              },
              userId,
              groupId
            );
          })
      )
      .catch(() =>
        presenter.presentUserToGroupAdditionFailure(
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

export { createUserToGroupAdditionInteractor, UserToGroupAdditionInteractor };
