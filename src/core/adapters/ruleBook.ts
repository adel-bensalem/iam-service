import { Policy } from "@types";

interface RuleBook {
  writePolicy(policy: Policy): Promise<Policy>;
}

export { RuleBook };
