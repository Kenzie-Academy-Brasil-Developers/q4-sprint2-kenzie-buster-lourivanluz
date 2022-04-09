import { getRepository, Repository } from "typeorm";
import { UserMovies } from "../../entities/UserMovies";
import { IUserMovie, IUserMovieRepo } from "./inteface";

class UserMovieRepo implements IUserMovieRepo {
  private ormRepo: Repository<UserMovies>;
  constructor() {
    this.ormRepo = getRepository(UserMovies);
  }
  save = (userMovie: IUserMovie) => {
    const userMovieSaved = this.ormRepo.save(userMovie);
    return userMovieSaved;
  };
  reatriverUserMovie = () => {
    return "a";
  };
  getUserMovieById = (id: string) => {
    return "a";
  };
}

export { UserMovieRepo };
