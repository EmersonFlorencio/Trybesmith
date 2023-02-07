import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Iuser } from '../interfaces/Users';
import UserService from '../services/UserService';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  createToken = async (user: Iuser) => {
    const payload = user;
    const secret = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
    return token;
  };

  async createNewUser(req: Request, res: Response) {
    const newuser = await this.service.createNewUser(req.body);
    
    const token = this.createToken(newuser);

    res.status(201).json({ token });
  }
}