import { Id } from "@types";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";
import { RuleBook } from "../adapters/ruleBook";

type GroupPolicyGrantInteractor = (groupId: Id, policyName: string) => void;

function createGroupPolicyGrantInteractor(
  repository: Repository,
  ruleBook: RuleBook,
  presenter: Presenter
): GroupPolicyGrantInteractor {
  return (groupId, policyName) =>
    repository
      .findGroupById(groupId)
      .then((group) =>
        ruleBook
          .findPolicy(policyName)
          .then((policy) =>
            repository
              .saveGroupPolicy(group, policy)
              .then(() =>
                presenter.presentGroupPolicyGrantSuccess(group, policy)
              )
              .catch(() =>
                presenter.presentGroupPolicyGrantFailure(
                  {
                    wasPermissionDenied: false,
                    wasGroupNotFound: false,
                    wasPolicyNotFound: false,
                  },
                  groupId,
                  policyName
                )
              )
          )
          .catch(() =>
            presenter.presentGroupPolicyGrantFailure(
              {
                wasPermissionDenied: false,
                wasGroupNotFound: false,
                wasPolicyNotFound: true,
              },
              groupId,
              policyName
            )
          )
      )
      .catch(() =>
        presenter.presentGroupPolicyGrantFailure(
          {
            wasPermissionDenied: false,
            wasGroupNotFound: true,
            wasPolicyNotFound: false,
          },
          groupId,
          policyName
        )
      );
}

export { createGroupPolicyGrantInteractor, GroupPolicyGrantInteractor };
