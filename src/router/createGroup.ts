import { Router } from "express";

export const groupCreationRouter = Router().post("/groups", (req) =>
  req.controller.createGroup()
);
