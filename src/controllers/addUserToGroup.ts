import { Core } from "@core";
import { Request, Response } from "express";

function addUserToGroup(core: Core, request: Request, _: Response) {
  return () => {
    const { userId, groupId } = request.params;

    core.addUserToGroup(userId, groupId);
  };
}

export { addUserToGroup };
