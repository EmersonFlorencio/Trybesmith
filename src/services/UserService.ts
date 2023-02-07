import { Iuser } from '../interfaces/Users';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async createNewUser(user: Iuser): Promise<Iuser> {
    const { username, vocation, level, password } = user;
    const newUser = await this.model.createNewUser(username, vocation, level, password);
   
    return newUser;
  }
}