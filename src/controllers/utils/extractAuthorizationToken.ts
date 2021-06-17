import { Request } from "express";

function extractAuthorizationToken(request: Request): string {
  return request.headers.authorization
    ? request.headers.authorization.substr("Bearer ".length)
    : "";
}

export { extractAuthorizationToken };
