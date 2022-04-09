import { MovieRepo, StockRepo, UserMovieRepo, UserRepo } from "../repositories";

const createUserMovie = async (quantity: number, movieid: string) => {
  const userId = "511a4f87-3df2-43b4-ab9d-2fa352044843";
  const user = await new UserRepo().getUserById(userId);
  const dvd = await new MovieRepo().getStockByMovieId(movieid);
  const value = await new StockRepo().handleStock(quantity, dvd.stock.id);

  if (typeof value !== "object") {
    const objt = {
      total: value,
      paid: false,
      user: user,
      movies: dvd,
    };
    const userMovie = await new UserMovieRepo().save(objt);
    const movie = await new MovieRepo().getStockByMovieId(movieid);
    const { movies, ...result } = userMovie;
    return { ...result, movies: { ...movie } };
  }
  return value;
};

export default createUserMovie;
