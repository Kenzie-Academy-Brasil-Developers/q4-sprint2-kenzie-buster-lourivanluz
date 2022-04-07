import { Request, Response, Router } from "express";

const userRouter = Router();
userRouter.post("/register", (req: Request, res: Response) => {
  res.status(200).json({ msg: "resgister" });
});

export default userRouter;
