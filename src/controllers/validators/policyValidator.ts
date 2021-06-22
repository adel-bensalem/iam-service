import { Policy } from "@types";
import { validate } from "jsonschema";
import { schema as permissionsSchema } from "./permissionsValidator";
import { schema as resourceSchema } from "./resourceValidator";

const schema = {
  type: "object",
  required: ["name", "statements"],
  properties: {
    name: {
      type: { type: "string" },
    },
    statements: {
      type: { type: "array" },
      items: {
        type: "object",
        required: ["resource", "permission"],
        properties: {
          resource: resourceSchema,
          permission: permissionsSchema,
        },
      },
    },
  },
};

const validatePolicy = (policy: Policy): boolean =>
  validate(policy, schema).valid;

export { validatePolicy };
