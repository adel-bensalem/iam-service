import { Router } from "express";

export const addUserToGroupRouter = Router().post(
  "/groups/:groupId/users/:userId",
  (req) => req.controller.addUserToGroup()
);
