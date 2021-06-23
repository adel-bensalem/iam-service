import { Router } from "express";

export const grantGroupPermissionRouter = Router().put(
  "/groups/:groupId/resources/:resourceName/permissions",
  (req) => req.controller.grantGroupPermission()
);
