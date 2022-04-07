import * as yup from "yup";
import { toTitleCase } from "../utils";

const movieSchema = yup.object().shape({
  name: yup.string().required().transform(toTitleCase),
  duration: yup.string().required(),
  quantity: yup.number().required(),
  price: yup.number().required(),
});

export default movieSchema;
