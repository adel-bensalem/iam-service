import { Id } from "@types";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";
import { squashPermissions } from "../entities/permissionDeterminator";

type UserPermissionsRetrievalInteractor = (userId: Id) => void;

function createUserPermissionsRetrievalInteractor(
  repository: Repository,
  presenter: Presenter
): UserPermissionsRetrievalInteractor {
  return (userId) =>
    repository
      .findUserById(userId)
      .then((user) =>
        repository
          .getUserPermissions(user)
          .then((permissions) =>
            presenter.presentUserPermissionsRetrievalSuccess(
              squashPermissions(permissions)
            )
          )
          .catch(() =>
            presenter.presentUserPermissionsRetrievalFailure(
              {
                wasPermissionDenied: true,
                wasUserNotFound: false,
              },
              userId
            )
          )
      )
      .catch(() =>
        presenter.presentUserPermissionsRetrievalFailure(
          {
            wasPermissionDenied: false,
            wasUserNotFound: true,
          },
          userId
        )
      );
}

export {
  createUserPermissionsRetrievalInteractor,
  UserPermissionsRetrievalInteractor,
};
