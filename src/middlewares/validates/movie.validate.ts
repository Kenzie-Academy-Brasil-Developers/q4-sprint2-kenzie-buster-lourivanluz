import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { IDvd } from "../../interfaces";

interface IDataMovie {
  dvds: IDvd[];
}

const movieValidate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data: IDataMovie[] = req.body.dvds;

    const validate = await Promise.all(
      data.map(async (item, index) => {
        try {
          const valided = await schema.validate(item);
          return valided;
        } catch (err) {
          res.status(400).json({ [index]: err.errors });
        }
      })
    );
    req.validade = validate;
    return next();
  };

export default movieValidate;
