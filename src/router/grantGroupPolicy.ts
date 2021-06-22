import { Router } from "express";

export const grantGroupPolicy = Router().put(
  "/groups/:groupId/policies/:policyName",
  (req) => req.controller.grantGroupPolicy()
);
