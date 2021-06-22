import { Id } from "@types";
import { Repository } from "../adapters/repository";
import { Presenter } from "../adapters/presenter";
import { RuleBook } from "../adapters/ruleBook";

type UserPolicyGrantInteractor = (userId: Id, policyName: string) => void;

function createUserPolicyGrantInteractor(
  repository: Repository,
  ruleBook: RuleBook,
  presenter: Presenter
): UserPolicyGrantInteractor {
  return (userId, policyName) =>
    repository
      .findUserById(userId)
      .then((user) =>
        ruleBook
          .findPolicy(policyName)
          .then((policy) =>
            repository
              .saveUserPolicy(user, policy)
              .then(() => presenter.presentUserPolicyGrantSuccess(user, policy))
              .catch(() =>
                presenter.presentUserPolicyGrantFailure(
                  {
                    wasPermissionDenied: false,
                    wasUserNotFound: false,
                    wasPolicyNotFound: false,
                  },
                  userId,
                  policyName
                )
              )
          )
          .catch(() =>
            presenter.presentUserPolicyGrantFailure(
              {
                wasPermissionDenied: false,
                wasUserNotFound: false,
                wasPolicyNotFound: true,
              },
              userId,
              policyName
            )
          )
      )
      .catch(() =>
        presenter.presentUserPolicyGrantFailure(
          {
            wasPermissionDenied: false,
            wasUserNotFound: true,
            wasPolicyNotFound: false,
          },
          userId,
          policyName
        )
      );
}

export { createUserPolicyGrantInteractor, UserPolicyGrantInteractor };
