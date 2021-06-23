import { Router } from "express";

export const grantUserPolicyRouter = Router().put(
  "/users/:userId/policies/:policyName",
  (req) => req.controller.grantUserPolicy()
);
