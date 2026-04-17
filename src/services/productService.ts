import { Product, CreateProductDTO } from "../types/product";

let products: Product[] = [];

export const getAllProducts = (): Product[] => {
    return products;
};

export const createProductService = (data: CreateProductDTO): Product => {
    const newProduct: Product = {
        id: products.length + 1,
        name: data.name,
        price: data.price
    }

    products.push(newProduct);

    return newProduct;
}