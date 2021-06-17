import { Db } from "mongodb";
import { Repository } from "@core";

function createRepository(db: Db): Repository {
  return {
    saveUser(user) {
      return db
        .collection("users")
        .insertOne(user)
        .then(({ insertedId }) => ({
          ...user,
          id: insertedId,
        }));
    },
    findUserByName(name) {
      return new Promise((resolve, reject) =>
        db
          .collection("users")
          .findOne({ name: { $eq: name } })
          .then((user) => (user ? resolve(user) : reject()))
      );
    },
  };
}

export { createRepository };
