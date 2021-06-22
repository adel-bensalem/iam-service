import { Db } from "mongodb";
import { RuleBook } from "@core";

function createRuleBook(db: Db): RuleBook {
  return {
    writePolicy(policy) {
      return db
        .collection("policies")
        .replaceOne({ name: { $eq: policy.name } }, policy, { upsert: true })
        .then(() => policy);
    },
  };
}

export { createRuleBook };
