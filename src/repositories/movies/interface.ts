interface IMovie {
  name: string;
  duration: string;
}

interface IMovieRepo {
  save: (movie: IMovie) => any;
  reatriverMovies: () => any;
  getMovieById: (id: string) => any;
}

export { IMovie, IMovieRepo };
