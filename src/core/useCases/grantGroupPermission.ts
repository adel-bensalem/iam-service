import { Id, Resource } from "@types";
import { Permission } from "../../types/permission";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";

type GroupPermissionGrantInteractor = (
  groupId: Id,
  resource: Resource,
  permission: Permission
) => void;

function createGroupPermissionGrantInteractor(
  repository: Repository,
  presenter: Presenter
): GroupPermissionGrantInteractor {
  return (groupId, resource, permission) =>
    repository
      .findGroupById(groupId)
      .then((group) =>
        repository
          .saveGroupPermissions(group, resource, permission)
          .then((permission) =>
            presenter.presentGroupPermissionGrantSuccess(
              group,
              resource,
              permission
            )
          )
          .catch(() =>
            presenter.presentGroupPermissionGrantFailure(
              {
                wasPermissionDenied: false,
                wasGroupNotFound: false,
              },
              groupId,
              resource,
              permission
            )
          )
      )

      .catch(() =>
        presenter.presentGroupPermissionGrantFailure(
          {
            wasPermissionDenied: false,
            wasGroupNotFound: true,
          },
          groupId,
          resource,
          permission
        )
      );
}

export { createGroupPermissionGrantInteractor, GroupPermissionGrantInteractor };
