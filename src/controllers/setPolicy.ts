import { Core } from "@core";
import { Request, Response } from "express";
import { validatePolicy } from "./validators/policyValidator";

function setPolicy(core: Core, request: Request, response: Response) {
  return () => {
    const policy = request.body;

    validatePolicy(policy)
      ? core.setPolicy(policy)
      : response.status(403).send({
          wasPermissionDenied: true,
          isPolicyNameInvalid: false,
          arePolicyStatementsInvalid: false,
        });
  };
}

export { setPolicy };
