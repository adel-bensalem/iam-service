import { Core } from "@core";
import { Request, Response } from "express";

function grantGroupPolicy(core: Core, request: Request, _: Response) {
  return () =>
    core.grantGroupPolicy(request.params.groupId, request.params.policyName);
}

export { grantGroupPolicy };
