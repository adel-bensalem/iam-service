import { Router } from "express";

export const grantGroupPolicyRouter = Router().put(
  "/groups/:groupId/policies/:policyName",
  (req) => req.controller.grantGroupPolicy()
);
