import express from 'express';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('API TypeScript funcionando 🚀');
});

app.use('/products', productRoutes);

app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});