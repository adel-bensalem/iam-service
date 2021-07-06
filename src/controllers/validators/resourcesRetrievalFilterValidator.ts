import { ResourcesRetrievalFilter } from "@types";
import { validate } from "jsonschema";
import { schema as permissionsSchema } from "./permissionsValidator";

const schema = {
  type: "object",
  required: ["name", "permission", "start", "limit"],
  properties: {
    name: {
      type: { type: "string" },
    },
    permission: permissionsSchema,
    start: { type: "number" },
    limit: { type: "number" },
  },
};

const validateResourcesRetrievalFilter = (
  filter: ResourcesRetrievalFilter
): boolean => validate(filter, schema).valid;

export { validateResourcesRetrievalFilter };
