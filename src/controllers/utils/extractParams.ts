import { Request } from "express";

function extractParams(request: Request): { [key: string]: string } {
  return request.query as { [key: string]: string };
}

export { extractParams };
