import { Policy } from "@types";

function validatePolicy(policy: Policy): {
  isPolicyNameInvalid: boolean;
  arePolicyStatementsInvalid: boolean;
} {
  return {
    arePolicyStatementsInvalid: policy.statements.length === 0,
    isPolicyNameInvalid: policy.name.length === 0,
  };
}

export { validatePolicy };
