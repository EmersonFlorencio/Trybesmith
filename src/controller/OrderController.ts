import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  async getAllOrders(_req: Request, res: Response) {
    const orders = await this.service.getAllOrders();

    res.status(200).json(orders);
  }
}