import { Router } from "express";

export const authenticationRouter = Router().get("/users", (req) =>
  req.controller.authenticate()
);
