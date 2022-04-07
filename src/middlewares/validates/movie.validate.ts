import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { IMovie } from "../../repositories/movies/interface";

interface IDataMovie {
  dvds: IMovie[];
}

const movieValidate =
  (schema: AnySchema) => (req: Request, res: Response, next: NextFunction) => {
    const data: IDataMovie = req.body;
    try {
      const validate = data.dvds.map(
        async (item) => (await schema.validate(item)) as IMovie
      );
      req.validade = validate;
    } catch (err) {
      return res.status(400).json({ err: err.errors });
    }
  };

export default movieValidate;
