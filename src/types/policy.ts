import { Permission, Resource } from "@types";

type Statement = { resource: Resource; permission: Permission };

type Policy = {
  name: string;
  statements: Statement[];
};

export { Policy };
