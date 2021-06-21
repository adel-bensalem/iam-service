import { Core } from "@core";
import { Request, Response } from "express";

function removeUserFromGroup(core: Core, request: Request, _: Response) {
  return () => {
    const { userId, groupId } = request.params;

    core.removeUserFromGroup(userId, groupId);
  };
}

export { removeUserFromGroup };
