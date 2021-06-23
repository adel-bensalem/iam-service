import { Id, Resource } from "@types";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";
import { hasPermission } from "../entities/permissionDeterminator";

type UserPermissionInsuranceInteractor = (
  userId: Id,
  resource: Resource,
  intent: string
) => void;

function createUserPermissionInsuranceInteractor(
  repository: Repository,
  presenter: Presenter
): UserPermissionInsuranceInteractor {
  return (userId, resource, intent) =>
    repository
      .findUserById(userId)
      .then((user) =>
        repository
          .getUserPermissionsOnResource(user, resource)
          .then((permissions) =>
            hasPermission(intent, permissions)
              ? presenter.presentUserPermissionInsuranceSuccess(
                  user,
                  resource,
                  intent
                )
              : presenter.presentUserPermissionInsuranceFailure(
                  {
                    hasUnExpectedError: false,
                    wasPermissionDenied: true,
                    wasUserNotFound: false,
                  },
                  userId,
                  resource,
                  intent
                )
          )
          .catch(() =>
            presenter.presentUserPermissionInsuranceFailure(
              {
                hasUnExpectedError: false,
                wasPermissionDenied: true,
                wasUserNotFound: false,
              },
              userId,
              resource,
              intent
            )
          )
      )
      .catch(() =>
        presenter.presentUserPermissionInsuranceFailure(
          {
            hasUnExpectedError: false,
            wasPermissionDenied: false,
            wasUserNotFound: true,
          },
          userId,
          resource,
          intent
        )
      );
}

export {
  createUserPermissionInsuranceInteractor,
  UserPermissionInsuranceInteractor,
};
