import { Core } from "@core";
import { Request, Response } from "express";
import { validatePermissions } from "./validators/permissionsValidator";
import { validateResource } from "./validators/resourceValidator";

function grantUserPermission(core: Core, request: Request, response: Response) {
  return () => {
    const { userId, resourceName } = request.params;
    const resource = { name: resourceName };

    validateResource(resource) && validatePermissions(request.body)
      ? core.grantUserPermission(userId, resource, request.body)
      : response.status(403).send({
          unAuthorizedOperation: true,
          hasUnExpectedError: false,
        });
  };
}

export { grantUserPermission };
