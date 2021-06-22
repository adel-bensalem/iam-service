import { Router } from "express";
import { userCreationRouter } from "./createUser";
import { authenticationRouter } from "./authenticate";
import { groupCreationRouter } from "./createGroup";
import { addUserToGroupRouter } from "./addUserToGroup";
import { removeUserFromGroup } from "./removeUserFromGroup";
import { grantUserPermission } from "./grantUserPermission";
import { policySetRouter } from "./setPolicy";

const router = Router();

router.use(userCreationRouter);
router.use(authenticationRouter);
router.use(groupCreationRouter);
router.use(addUserToGroupRouter);
router.use(removeUserFromGroup);
router.use(grantUserPermission);
router.use(policySetRouter);

export { router };
