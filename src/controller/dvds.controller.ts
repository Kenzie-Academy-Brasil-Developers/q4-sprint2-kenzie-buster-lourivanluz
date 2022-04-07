import { Request, Response } from "express";
import { IMovie } from "../repositories/movies/interface";

const dvdsController = (req: Request, res: Response) => {
  const data = req.validade as Array<IMovie>;
};
