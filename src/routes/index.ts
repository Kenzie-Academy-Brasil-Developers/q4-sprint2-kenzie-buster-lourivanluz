import { Router } from "express";
import dvdsRouter from "./dvds/dvds.router";
import userRouter from "./user/user.router";

const router = Router();
router.use("/dvds", dvdsRouter);
router.use("/users", userRouter);

export default router;
