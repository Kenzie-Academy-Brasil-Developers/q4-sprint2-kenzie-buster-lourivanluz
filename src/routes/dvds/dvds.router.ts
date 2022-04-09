import { Request, Response, Router } from "express";
import { buyDvdController, createDvdsController } from "../../controller";
import { getDvdController } from "../../controller";
import { validateBody } from "../../middlewares/validates";
import { buyDvdSchema, dvdsSchema } from "../../schema";

const dvdsRouter = Router();

dvdsRouter.post("", validateBody(dvdsSchema), createDvdsController);
dvdsRouter.get("", getDvdController);
dvdsRouter.post("/buy/:dvdid", validateBody(buyDvdSchema), buyDvdController);

export default dvdsRouter;
