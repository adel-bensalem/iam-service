import { Router } from "express";

export const policySetRouter = Router().post("/policies", (req) =>
  req.controller.setPolicy()
);
