import { Router } from "express";

export const ensureUserPermissionRouter = Router().get(
  "/users/:userId/resources/:resourceName/permissions",
  (req) => req.controller.ensureUserPermission()
);
