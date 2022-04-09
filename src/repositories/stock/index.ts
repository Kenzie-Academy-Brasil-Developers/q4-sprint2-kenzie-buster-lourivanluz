import { IStock, IStockRepo } from "./interface";
import { getRepository, Repository } from "typeorm";
import { Stock } from "../../entities/Stock";

class StockRepo implements IStockRepo {
  private ormRepo: Repository<Stock>;
  constructor() {
    this.ormRepo = getRepository(Stock);
  }
  save = async (stock: IStock) => {
    const newStock = await this.ormRepo.save(stock);
    return newStock;
  };
  reatriverStock = async () => {
    const stockList = await this.ormRepo.find();
    return stockList;
  };
  getStockById = async (id: string) => {
    const [stock] = await this.ormRepo.find({ id: id });
    return stock;
  };

  handleStock = async (quantity: number, stockid: string) => {
    const stock = await this.getStockById(stockid);
    const newQuantity = stock.quantity - quantity;
    if (newQuantity >= 0) {
      stock.quantity = newQuantity;
      this.save(stock);
      return stock.price * quantity;
    }
    return {
      error: `current stock: ${stock.quantity}, received demand ${quantity}`,
    };
  };
}

export { StockRepo };
