import { Pool, RowDataPacket } from 'mysql2/promise';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders() {
    const query = `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id)
    AS productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY orders.id`;
    const [result] = await this.connection.execute<RowDataPacket[]>(query);

    return result;
  }
}