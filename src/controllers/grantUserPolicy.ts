import { Core } from "@core";
import { Request, Response } from "express";

function grantUserPolicy(core: Core, request: Request, _: Response) {
  return () =>
    core.grantUserPolicy(request.params.userId, request.params.policyName);
}

export { grantUserPolicy };
