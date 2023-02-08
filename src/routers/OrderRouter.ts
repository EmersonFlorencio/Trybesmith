import { Router } from 'express';
import OrderController from '../controller/OrderController';

const router = Router();
const orderRouter = new OrderController();

router.get('/', (req, res) => orderRouter.getAllOrders(req, res));

export default router;