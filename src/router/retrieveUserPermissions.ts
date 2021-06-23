import { Router } from "express";

export const retrieveUserPermissionsRouter = Router().get(
  "/users/:userId/permissions",
  (req) => req.controller.retrieveUserPermissions()
);
