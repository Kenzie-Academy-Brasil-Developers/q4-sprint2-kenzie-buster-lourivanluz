import { IDvd } from "../interfaces";
import { MovieRepo } from "../repositories/movies";
import { StockRepo } from "../repositories/stock";

const createDvdService = async (dvdList: Array<IDvd>) => {
  const savedDvd = await Promise.all(
    dvdList.map(async ({ name, duration, quantity, price }) => {
      try {
        const movieRepo = new MovieRepo();
        const stockRepo = new StockRepo();
        const movieSaved = await movieRepo.save({ name, duration });
        const stockSaved = await stockRepo.save({ quantity, price });
        stockSaved.movie = movieSaved;
        movieSaved.stock = stockSaved;
        await stockRepo.save(stockSaved);
        await movieRepo.save(movieSaved);

        const { movie, ...result } = stockSaved;
        return { ...movieSaved, stock: result };
      } catch (err) {
        return { err: err.detail };
      }
    })
  );
  return savedDvd;
};

export default createDvdService;
