import { Core } from "@core";
import { Request, Response } from "express";
import { validateUser } from "./validators/userValidator";

function createUser(core: Core, request: Request, response: Response) {
  return () => {
    const user = request.body;

    validateUser(user)
      ? core.createUser(user)
      : response.status(403).send({
          wasPermissionDenied: true,
          hasInvalidName: false,
          hasInvalidPassword: false,
        });
  };
}

export { createUser };
