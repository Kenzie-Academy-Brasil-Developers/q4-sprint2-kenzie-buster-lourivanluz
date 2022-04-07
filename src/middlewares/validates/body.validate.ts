import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateBody =
  (schema: AnySchema) => (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    try {
      const validate = schema.validate(data);
      req.validade = validate;
      return next();
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
  };

export default validateBody;
