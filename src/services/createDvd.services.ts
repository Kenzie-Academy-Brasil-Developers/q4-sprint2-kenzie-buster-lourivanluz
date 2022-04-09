import { IDvd } from "../interfaces";
import { MovieRepo } from "../repositories/movies";
import { StockRepo } from "../repositories/stock";

const createDvdService = (dvdList: Array<IDvd>) => {
  const savedDvd = dvdList.map(async (dvd) => {
    const { name, duration, quantity, price } = dvd;
    const movie = await new MovieRepo().save({ name, duration });
    const stock = await new StockRepo().save({ quantity, price });
    stock.move = movie;
    await new StockRepo().save(stock);
    return dvd;
  });
  return savedDvd;
};

export default createDvdService;
