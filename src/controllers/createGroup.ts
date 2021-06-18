import { Core } from "@core";
import { Request, Response } from "express";
import { validateGroup } from "./validators/groupValidator";

function createGroup(core: Core, request: Request, response: Response) {
  return () => {
    const group = request.body;

    validateGroup(group)
      ? core.createGroup(group)
      : response.status(403).send({
          wasPermissionDenied: true,
          hasInvalidName: false,
          hasInvalidPassword: false,
        });
  };
}

export { createGroup };
