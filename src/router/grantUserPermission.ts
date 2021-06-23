import { Router } from "express";

export const grantUserPermissionRouter = Router().put(
  "/users/:userId/resources/:resourceName/permissions",
  (req) => req.controller.grantUserPermission()
);
