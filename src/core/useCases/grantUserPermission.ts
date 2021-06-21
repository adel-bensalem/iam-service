import { Id, Resource } from "@types";
import { Permission } from "../../types/permission";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";

type UserPermissionGrantInteractor = (
  userId: Id,
  resource: Resource,
  permission: Permission
) => void;

function createUserPermissionGrantInteractor(
  repository: Repository,
  presenter: Presenter
): UserPermissionGrantInteractor {
  return (userId, resource, permission) =>
    repository
      .findUserById(userId)
      .then((user) =>
        repository
          .saveUserPermissions(user, resource, permission)
          .then((permission) =>
            presenter.presentUserPermissionGrantSuccess(
              user,
              resource,
              permission
            )
          )
          .catch(() =>
            presenter.presentUserPermissionGrantFailure(
              {
                wasPermissionDenied: false,
                wasUserNotFound: false,
              },
              userId,
              resource,
              permission
            )
          )
      )

      .catch(() =>
        presenter.presentUserPermissionGrantFailure(
          {
            wasPermissionDenied: false,
            wasUserNotFound: true,
          },
          userId,
          resource,
          permission
        )
      );
}

export { createUserPermissionGrantInteractor, UserPermissionGrantInteractor };
