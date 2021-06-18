import { Core } from "@core";
import { Request, Response } from "express";
import { Controller } from "./types/controller";
import { createUser } from "./createUser";
import { authenticate } from "./authenticate";
import { createGroup } from "./createGroup";

function createController(
  core: Core,
  request: Request,
  response: Response
): Controller {
  return {
    createUser: createUser(core, request, response),
    authenticate: authenticate(core, request, response),
    createGroup: createGroup(core, request, response),
  };
}

export { createController, Controller };
