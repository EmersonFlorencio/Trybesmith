import express from 'express';
import productRouter from './routers/ProductRouter';
import userRouter from './routers/UserRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
