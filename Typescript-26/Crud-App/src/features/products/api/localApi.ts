import type { Product } from "../types";

const KEY = "products";

// Get all
export const getProducts = (): Product[] => {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
};

// Save all
const saveProducts = (data: Product[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

// Create
export const createProduct = (product: Product) => {
  const products = getProducts();
  const newProduct = { ...product, _id: Date.now().toString() };
  saveProducts([...products, newProduct]);
};

// Update
export const updateProduct = (id: string, updated: Product) => {
  const products = getProducts().map((p) =>
    p._id === id ? { ...p, ...updated } : p
  );
  saveProducts(products);
};

// Delete
export const deleteProduct = (id: string) => {
  const products = getProducts().filter((p) => p._id !== id);
  saveProducts(products);
};

// Get Single
export const getProductById = (id: string) => {
  return getProducts().find((p) => p._id === id);
};