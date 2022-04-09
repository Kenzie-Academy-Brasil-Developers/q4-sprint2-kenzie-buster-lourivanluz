import { Request, Response } from "express";
import { IDvd } from "../interfaces";
import { createDvdService } from "../services";

const createDvdsController = (req: Request, res: Response) => {
  //const data = req.validade.dvds as Array<IDvd>;
  //const result = createDvdService(data);
  console.log(req.validade);
  res.status(201).json({ a: "a" });
};

export { createDvdsController };
