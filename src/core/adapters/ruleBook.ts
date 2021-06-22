import { Policy } from "@types";

interface RuleBook {
  writePolicy(policy: Policy): Promise<Policy>;
  findPolicy(name: string): Promise<Policy>;
}

export { RuleBook };
