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
    findPolicy(name) {
      return new Promise((resolve, reject) =>
        db
          .collection("policies")
          .findOne({ name: { $eq: name } })
          .then((policy) =>
            policy ? resolve({ ...policy, id: policy._id }) : reject()
          )
      );
    },
  };
}

export { createRuleBook };
