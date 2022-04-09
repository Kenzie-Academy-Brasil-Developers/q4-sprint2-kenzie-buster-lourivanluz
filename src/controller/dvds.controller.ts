import { Request, Response } from "express";
import { IDvd } from "../interfaces";
import { createDvdService, createUserMovie } from "../services";
import { MovieRepo, StockRepo } from "../repositories";

const createDvdsController = async (req: Request, res: Response) => {
  const data = req.validade.dvds as Array<IDvd>;
  const result = await createDvdService(data);
  res.status(201).json(result);
};

const getDvdController = async (_, res: Response) => {
  const movielist = await new MovieRepo().getMovieAndStock();
  res.status(200).json(movielist);
};

const buyDvdController = async (req: Request, res: Response) => {
  const id = req.params.dvdid;
  try {
    const result = await createUserMovie(req.body.quantity, id);
    res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ err: err });
  }
};

export { createDvdsController, getDvdController, buyDvdController };
