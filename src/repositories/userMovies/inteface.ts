import { IMovie } from "../movies/interface";
import { IUser } from "../user/interface";

interface IUserMovie {
  total: number;
  paid: boolean;
  user?: IUser;
  movies?: IMovie;
}

interface IUserMovieRepo {
  save: (userMovie: IUserMovie) => any;
  reatriverUserMovie: () => any;
  getUserMovieById: (id: string) => any;
}

export { IUserMovie, IUserMovieRepo };
