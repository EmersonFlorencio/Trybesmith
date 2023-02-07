import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import { Iproduct } from '../interfaces/Product';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  } 

  async createNewProduct(name: string, amount: string): Promise<Iproduct> {
    const product = await this.model.createNewProduct(name, amount);

    return product;
  }

  async getAll(): Promise<Iproduct[]> {
    const allProducts = await this.model.getAll();

    return allProducts;
  }
}