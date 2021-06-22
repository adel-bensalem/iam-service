import { Policy } from "@types";
import { RuleBook } from "../adapters/ruleBook";
import { Presenter } from "../adapters/presenter";
import { validatePolicy } from "../entities/policyValidator";

type PolicySetInteractor = (policy: Policy) => void;

function createPolicySetInteractor(
  ruleBook: RuleBook,
  presenter: Presenter
): PolicySetInteractor {
  return (policy) => {
    const error = { ...validatePolicy(policy), wasPermissionDenied: false };

    !error.arePolicyStatementsInvalid && !error.isPolicyNameInvalid
      ? ruleBook
          .writePolicy(policy)
          .then(presenter.presentPolicySetSuccess)
          .catch(() => presenter.presentPolicySetFailure(error, policy))
      : presenter.presentPolicySetFailure(error, policy);
  };
}

export { createPolicySetInteractor, PolicySetInteractor };
