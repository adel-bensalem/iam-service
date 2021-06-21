import { Router } from "express";

export const removeUserFromGroup = Router().delete(
  "/groups/:groupId/users/:userId",
  (req) => req.controller.removeUserFromGroup()
);
