import express from 'express';
import productRouter from './routers/ProductRouter';
import userRouter from './routers/UserRouter';
import orderRouter from './routers/OrderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
