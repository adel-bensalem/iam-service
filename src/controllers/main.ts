import { Core } from "@core";
import { Request, Response } from "express";
import { Controller } from "./types/controller";
import { createUser } from "./createUser";
import { authenticate } from "./authenticate";
import { createGroup } from "./createGroup";
import { addUserToGroup } from "./addUserToGroup";
import { removeUserFromGroup } from "./removeUserFromGroup";
import { grantUserPermission } from "./grantUserPermission";
import { setPolicy } from "./setPolicy";

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
    setPolicy: setPolicy(core, request, response),
  };
}

export { createController, Controller };
