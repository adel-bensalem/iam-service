import { Router } from "express";

export const retrieveUserPermissions = Router().get(
  "/users/:userId/permissions",
  (req) => req.controller.retrieveUserPermissions()
);
