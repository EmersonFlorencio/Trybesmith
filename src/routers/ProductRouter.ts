import { Router } from 'express';
import ProductController from '../controller/ProductController';

const router = Router();
const productController = new ProductController();

router.post('/', (req, res) => productController.createNewProduct(req, res));

export default router;