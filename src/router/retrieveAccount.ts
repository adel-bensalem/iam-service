import { Router } from "express";

export const retrieveAccount = Router().get("/users", (req, _, next) =>
  !req.query.name && !req.query.password
    ? req.controller.retrieveAccount()
    : next()
);
