import { Resource } from "@types";
import { validate } from "jsonschema";

const schema = {
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string" },
  },
};

const validateResource = (resource: Resource): boolean =>
  validate(resource, schema).valid;

export { validateResource, schema };
