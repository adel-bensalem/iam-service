import { Core } from "@core";
import { Request, Response } from "express";
import { validateResource } from "./validators/resourceValidator";
import { extractParams } from "./utils/extractParams";

function ensureUserPermission(
  core: Core,
  request: Request,
  response: Response
) {
  return () => {
    const { userId, resourceName } = request.params;
    const { intent } = extractParams(request);
    const resource = { name: resourceName };

    validateResource(resource)
      ? core.ensureUserPermission(userId, resource, intent)
      : response.status(403).send({
          wasPermissionDenied: true,
          wasUserNotFound: false,
          hasUnExpectedError: false,
        });
  };
}

export { ensureUserPermission };
