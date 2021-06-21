import { Router } from "express";

export const grantUserPermission = Router().put(
  "/users/:userId/resources/:resourceName/permissions",
  (req) => req.controller.grantUserPermission()
);
