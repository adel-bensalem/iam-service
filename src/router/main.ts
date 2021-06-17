import { Router } from "express";
import { userCreationRouter } from "./createUser";

const router = Router();

router.use(userCreationRouter);

export { router };
