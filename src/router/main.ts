import { Router } from "express";
import { userCreationRouter } from "./createUser";
import { authenticationRouter } from "./authenticate";

const router = Router();

router.use(userCreationRouter);
router.use(authenticationRouter);

export { router };
