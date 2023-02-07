import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Iuser } from '../interfaces/Users';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createNewUser(
    username: string, 
    vocation: string, 
    level: number, 
    password?: string,
  ): Promise<Iuser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?)', 
      [username, vocation, level, password],
    );
    const newUser = {
      id: insertId,
      username,
      vocation,
      level,
    };
  
    return newUser;
  }
}