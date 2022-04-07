import { Request, Response, Router } from "express";

const dvdsRouter = Router();

dvdsRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "rota certa" });
});

export default dvdsRouter;
