import { IMovie, IMovieRepo } from "./interface";
import { getRepository, Repository } from "typeorm";
import { Movie } from "../../entities/Movie";

class MovieRepo implements IMovieRepo {
  private ormRepo: Repository<Movie>;
  constructor() {
    this.ormRepo = getRepository(Movie);
  }
  save = async (movie: IMovie) => {
    const newMovie = await this.ormRepo.save(movie);
    return newMovie;
  };
  reatriverMovies = async () => {
    const movieList = await this.ormRepo.find();
    return movieList;
  };
  getMovieById = async (id: string) => {
    const [movie] = await this.ormRepo.find({ id: id });
    return movie;
  };
}

export { MovieRepo };
