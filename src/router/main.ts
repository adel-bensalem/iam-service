import { Router } from "express";
import { userCreationRouter } from "./createUser";
import { authenticationRouter } from "./authenticate";
import { groupCreationRouter } from "./createGroup";

const router = Router();

router.use(userCreationRouter);
router.use(authenticationRouter);
router.use(groupCreationRouter);

export { router };
