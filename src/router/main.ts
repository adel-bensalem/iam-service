import { Router } from "express";
import { userCreationRouter } from "./createUser";
import { authenticationRouter } from "./authenticate";
import { groupCreationRouter } from "./createGroup";
import { addUserToGroupRouter } from "./addUserToGroup";
import { removeUserFromGroup } from "./removeUserFromGroup";

const router = Router();

router.use(userCreationRouter);
router.use(authenticationRouter);
router.use(groupCreationRouter);
router.use(addUserToGroupRouter);
router.use(removeUserFromGroup);

export { router };
