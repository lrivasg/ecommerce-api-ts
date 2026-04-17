import { Request, Response } from "express";
import { CreateProductDTO, Product } from "../types/product";
import { getAllProducts, createProductService } from "../services/productService";

export const getProducts = (req: Request, res: Response<Product[]>) => {
    const products = getAllProducts();
    res.json(products);
};

type ApiResponse<T> = T | { message: string };

export const createProduct = (req: Request, res: Response<ApiResponse<Product>>) => {
    const { name, price }: CreateProductDTO = req.body;

    // Validación básica
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: 'Name inválido' });
    }

    if (price === undefined || typeof price !== 'number') {
        return res.status(400).json({ message: 'Price inválido' });
    }

    const product = createProductService({ name, price })

    res.status(201).json(product);
};