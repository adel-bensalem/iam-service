import { Router } from "express";

export const retrieveAccessibleResourcesRouter = Router().get(
  "/users/:userId/resources",
  (req) => req.controller.retrieveAccessibleResources()
);
