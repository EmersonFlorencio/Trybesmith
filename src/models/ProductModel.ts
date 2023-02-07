import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Iproduct } from '../interfaces/Product';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createNewProduct(name: string, amount: string): Promise<Iproduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
      [name, amount],
    );

    const newProduct = {
      id: insertId,
      name,
      amount,
    };

    return newProduct;
  }

  async getAll(): Promise<Iproduct[]> {
    const [result] = await this.connection.execute<(Iproduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');
    return result;
  }
}