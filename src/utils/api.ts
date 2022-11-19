import { ProductProps } from "../types/types";

export async function getProducts(): Promise<ProductProps[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = response.json();
  return products;
}