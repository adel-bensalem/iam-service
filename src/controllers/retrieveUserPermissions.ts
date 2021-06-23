import { Core } from "@core";
import { Request, Response } from "express";

function retrieveUserPermissions(core: Core, request: Request, _: Response) {
  return () => core.retrieveUserPermissions(request.params.userId);
}

export { retrieveUserPermissions };
