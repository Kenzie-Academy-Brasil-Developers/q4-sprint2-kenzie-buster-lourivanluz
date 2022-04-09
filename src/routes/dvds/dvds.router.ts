import { Request, Response, Router } from "express";
import { createDvdsController } from "../../controller";
import validateBody from "../../middlewares/validates/body.validate";
import movieValidate from "../../middlewares/validates/movie.validate";
import { dvdsSchema, dvdSchema } from "../../schema";

const dvdsRouter = Router();

dvdsRouter.post("", movieValidate(dvdSchema), createDvdsController);

export default dvdsRouter;
