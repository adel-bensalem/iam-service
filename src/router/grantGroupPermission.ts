import { Router } from "express";

export const grantGroupPermission = Router().put(
  "/groups/:groupId/resources/:resourceName/permissions",
  (req) => req.controller.grantGroupPermission()
);
