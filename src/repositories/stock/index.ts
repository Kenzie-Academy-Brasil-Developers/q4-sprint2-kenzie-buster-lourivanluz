interface IStock {
  quantity: number;
  price: number;
}

interface IStockRepo {
  save: (movie: IStock) => any;
  reatriverMovies: () => any;
  getMovieById: (id: string) => any;
}

export { IStock, IStockRepo };
