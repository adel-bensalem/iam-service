import { Group, GroupCreationError } from "@types";
import { Presenter, Repository } from "@core";
import { isGroupValid } from "../entities/groupValidator";

type GroupCreationInteractor = (group: Group) => void;

function createGroupCreationInteractor(
  repository: Repository,
  presenter: Presenter
): GroupCreationInteractor {
  return (group) => {
    const error: GroupCreationError = {
      doesGroupAlreadyExists: false,
      wasPermissionDenied: false,
      hasInvalidName: !isGroupValid(group),
    };

    !error.hasInvalidName
      ? repository
          .findGroupByName(group.name)
          .then((user) =>
            presenter.presentGroupCreationFailure(
              { ...error, doesGroupAlreadyExists: true },
              user
            )
          )
          .catch(() =>
            repository
              .saveGroup(group)
              .then(presenter.presentGroupCreationSuccess)
              .catch(() => presenter.presentGroupCreationFailure(error, group))
          )
      : presenter.presentGroupCreationFailure(error, group);
  };
}

export { createGroupCreationInteractor, GroupCreationInteractor };
