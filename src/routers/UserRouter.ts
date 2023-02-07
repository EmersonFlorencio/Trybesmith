import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();
const userController = new UserController();

router.post('/', (req, res) => userController.createNewUser(req, res));

export default router;
