import { Group } from "@types";

function isGroupValid(group: Group): boolean {
  return !!group.name;
}

export { isGroupValid };
