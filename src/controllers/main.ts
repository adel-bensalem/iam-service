import { Core } from "@core";
import { Request, Response } from "express";
import { Controller } from "./types/controller";
import { createUser } from "./createUser";
import { authenticate } from "./authenticate";
import { createGroup } from "./createGroup";
import { addUserToGroup } from "./addUserToGroup";
import { removeUserFromGroup } from "./removeUserFromGroup";
import { grantUserPermission } from "./grantUserPermission";
import { grantGroupPermission } from "./grantGroupPermission";
import { grantUserPolicy } from "./grantUserPolicy";
import { grantGroupPolicy } from "./grantGroupPolicy";
import { ensureUserPermission } from "./ensureUserPermission";
import { retrieveUserPermissions } from "./retrieveUserPermissions";
import { retrieveAccount } from "./retrieveAccount";
import { setPolicy } from "./setPolicy";
import { retrieveAccessibleResources } from "./retrieveAccessibleResources";

function createController(
  core: Core,
  request: Request,
  response: Response
): Controller {
  return {
    createUser: createUser(core, request, response),
    authenticate: authenticate(core, request, response),
    createGroup: createGroup(core, request, response),
    addUserToGroup: addUserToGroup(core, request, response),
    removeUserFromGroup: removeUserFromGroup(core, request, response),
    grantUserPermission: grantUserPermission(core, request, response),
    grantGroupPermission: grantGroupPermission(core, request, response),
    grantUserPolicy: grantUserPolicy(core, request, response),
    grantGroupPolicy: grantGroupPolicy(core, request, response),
    ensureUserPermission: ensureUserPermission(core, request, response),
    setPolicy: setPolicy(core, request, response),
    retrieveUserPermissions: retrieveUserPermissions(core, request, response),
    retrieveAccount: retrieveAccount(core, request, response),
    retrieveAccessibleResources: retrieveAccessibleResources(
      core,
      request,
      response
    ),
  };
}

export { createController, Controller };
