interface IStock {
  quantity: number;
  price: number;
}

interface IStockRepo {
  save: (movie: IStock) => any;
  reatriverStock: () => any;
  getStockById: (id: string) => any;
}

export { IStock, IStockRepo };
