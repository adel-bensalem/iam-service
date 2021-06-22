import { Router } from "express";

export const grantUserPolicy = Router().put(
  "/users/:userId/policies/:policyName",
  (req) => req.controller.grantUserPolicy()
);
