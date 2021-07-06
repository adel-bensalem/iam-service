import { Permission } from "@types";

type ResourcesRetrievalFilter = {
  name: string;
  permission: Permission;
  start: number;
  limit: number;
};

export { ResourcesRetrievalFilter };
