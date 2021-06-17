import { Router } from "express";

export const userCreationRouter = Router().post("/users", (req) =>
  req.controller.createUser()
);
