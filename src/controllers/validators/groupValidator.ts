import { User } from "@types";
import { validate } from "jsonschema";

const schema = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: { type: "string" },
    },
  },
};

const validateGroup = (user: User): boolean => validate(user, schema).valid;

export { validateGroup };
