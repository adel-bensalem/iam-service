import { Router } from "express";

export const removeUserFromGroupRouter = Router().delete(
  "/groups/:groupId/users/:userId",
  (req) => req.controller.removeUserFromGroup()
);
