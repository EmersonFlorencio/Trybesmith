import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async createNewProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    const newProduct = await this.service.createNewProduct(name, amount);
    res.status(201).json(newProduct);
  }

  async getAll(_req: Request, res: Response) {
    const allProducts = await this.service.getAll();
    res.status(200).json(allProducts);
  }
}
