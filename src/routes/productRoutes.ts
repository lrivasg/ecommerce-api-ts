import { Router } from "express";
import { getProducts, createProduct } from "../controllers/productController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get('/', getProducts);

router.post('/', authMiddleware, createProduct);

export default router;