import { Router } from "express";

export const ensureUserPermission = Router().get(
  "/users/:userId/resources/:resourceName/permissions",
  (req) => req.controller.ensureUserPermission()
);
