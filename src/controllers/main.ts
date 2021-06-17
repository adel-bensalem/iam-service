import { Core } from "@core";
import { Request, Response } from "express";
import { Controller } from "./types/controller";
import { createUser } from "./createUser";

function createController(
  core: Core,
  request: Request,
  response: Response
): Controller {
  return {
    createUser: createUser(core, request, response),
  };
}

export { createController, Controller };
