import { Core } from "@core";
import { Request, Response } from "express";
import { extractParams } from "./utils/extractParams";
import { validateCredentials } from "./validators/credentialsValidator";

function authenticate(core: Core, request: Request, response: Response) {
  return () => {
    const { name, password } = extractParams(request);
    const credentials = { name, password };

    validateCredentials(credentials)
      ? core.authenticate(credentials)
      : response.status(403).send({
          unAuthorizedOperation: true,
          hasUnExpectedError: false,
        });
  };
}

export { authenticate };
