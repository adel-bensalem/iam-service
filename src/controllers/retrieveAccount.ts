import { Core } from "@core";
import { Request, Response } from "express";
import { extractAuthorizationToken } from "./utils/extractAuthorizationToken";

function retrieveAccount(core: Core, request: Request, _: Response) {
  return () => core.retrieveAccount(extractAuthorizationToken(request));
}

export { retrieveAccount };
