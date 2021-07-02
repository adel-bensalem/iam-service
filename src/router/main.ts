import { Router } from "express";
import { userCreationRouter } from "./createUser";
import { authenticationRouter } from "./authenticate";
import { groupCreationRouter } from "./createGroup";
import { addUserToGroupRouter } from "./addUserToGroup";
import { removeUserFromGroupRouter } from "./removeUserFromGroup";
import { grantUserPermissionRouter } from "./grantUserPermission";
import { grantGroupPermissionRouter } from "./grantGroupPermission";
import { grantUserPolicyRouter } from "./grantUserPolicy";
import { grantGroupPolicyRouter } from "./grantGroupPolicy";
import { ensureUserPermissionRouter } from "./ensureUserPermission";
import { retrieveUserPermissionsRouter } from "./retrieveUserPermissions";
import { policySetRouter } from "./setPolicy";
import { retrieveAccount } from "./retrieveAccount";

const router = Router();

router.use(retrieveAccount);
router.use(userCreationRouter);
router.use(authenticationRouter);
router.use(groupCreationRouter);
router.use(addUserToGroupRouter);
router.use(removeUserFromGroupRouter);
router.use(grantUserPermissionRouter);
router.use(grantGroupPermissionRouter);
router.use(grantUserPolicyRouter);
router.use(grantGroupPolicyRouter);
router.use(ensureUserPermissionRouter);
router.use(retrieveUserPermissionsRouter);
router.use(policySetRouter);

export { router };
