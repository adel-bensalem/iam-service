import { Permission } from "@types";
import { validate } from "jsonschema";

const schema = {
  type: "object",
  required: ["canRead", "canWrite", "canExecute"],
  properties: {
    canRead: { type: "boolean" },
    canWrite: { type: "boolean" },
    canExecute: { type: "boolean" },
  },
};

const validatePermissions = (permission: Permission): boolean =>
  validate(permission, schema).valid;

export { validatePermissions };
