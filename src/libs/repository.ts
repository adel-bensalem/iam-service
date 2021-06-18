import { Db, ObjectId } from "mongodb";
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
          .then((user) =>
            user ? resolve({ ...user, id: user._id }) : reject()
          )
      );
    },
    findUserById(id) {
      return new Promise((resolve, reject) =>
        db
          .collection("users")
          .findOne({ _id: { $eq: new ObjectId(id) } })
          .then((user) =>
            user ? resolve({ ...user, id: user._id }) : reject()
          )
      );
    },
    saveGroup(group) {
      return db
        .collection("groups")
        .insertOne(group)
        .then(({ insertedId }) => ({
          ...group,
          id: insertedId,
        }));
    },
    findGroupByName(name) {
      return new Promise((resolve, reject) =>
        db
          .collection("groups")
          .findOne({ name: { $eq: name } })
          .then((group) =>
            group ? resolve({ ...group, id: group._id }) : reject()
          )
      );
    },
    findGroupById(id) {
      return new Promise((resolve, reject) =>
        db
          .collection("groups")
          .findOne({ _id: { $eq: new ObjectId(id) } })
          .then((group) =>
            group ? resolve({ ...group, id: group._id }) : reject()
          )
      );
    },
    addUserToGroup(group, user) {
      return new Promise((resolve, reject) =>
        db
          .collection("groupsUsers")
          .updateOne(
            {
              groupId: { $eq: new ObjectId(group.id) },
              userId: { $eq: new ObjectId(user.id) },
            },
            {
              $set: {
                groupId: group.id,
                userId: user.id,
              },
            },
            { upsert: true }
          )
          .then(() => resolve())
          .catch(reject)
      );
    },
  };
}

export { createRepository };
