import { Core } from "@core";
import { Request, Response } from "express";
import { Permission, ResourcesRetrievalFilter } from "@types";
import { validateResourcesRetrievalFilter } from "./validators/resourcesRetrievalFilterValidator";

function extractFilter(request: Request): ResourcesRetrievalFilter {
  const permissions =
    typeof request.query.permission === "object"
      ? {
          canWrite: false,
          canRead: false,
          canExecute: false,
          ...request.query.permission,
        }
      : {
          canWrite: false,
          canRead: false,
          canExecute: false,
        };

  return {
    name: <string>request.query.name,
    permission: Object.entries(permissions).reduce<Permission>(
      (perms, [key, value]) => ({ ...perms, [key]: Boolean(value) }),
      permissions
    ),
    limit: parseInt(<string>request.query.limit),
    start: parseInt(<string>request.query.start),
  };
}

function retrieveAccessibleResources(
  core: Core,
  request: Request,
  response: Response
) {
  return () => {
    const { userId } = request.params;
    const filter = extractFilter(request);

    validateResourcesRetrievalFilter(filter)
      ? core.retrieveAccessibleResources(userId, filter)
      : response.status(403).send({
          wasPermissionDenied: true,
          wasUserNotFound: false,
          hasUnExpectedError: false,
        });
  };
}

export { retrieveAccessibleResources };
