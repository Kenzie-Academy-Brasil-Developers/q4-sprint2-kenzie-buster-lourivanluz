import * as yup from "yup";
import { toTitleCase } from "../utils";

const dvdSchema = yup.object().shape({
  name: yup.string().required().transform(toTitleCase),
  duration: yup.string().required(),
  quantity: yup.number().required(),
  price: yup.number().required(),
});

const dvdsSchema = yup.object().shape({
  dvds: yup.array().of(
    yup.object().shape({
      name: yup.string().required().transform(toTitleCase),
      duration: yup.string().required(),
      quantity: yup.number().required(),
      price: yup.number().required(),
    })
  ),
});

export { dvdSchema, dvdsSchema };
