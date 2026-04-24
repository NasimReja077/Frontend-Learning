import api from "../../../app/axios";
import { Product } from "../types";

export const getProducts = () => api.get("/products");

export const createProduct = (data: Product) =>
  api.post("/products", data);

export const updateProduct = (id: string, data: Product) =>
  api.put(`/products/${id}`, data);

export const deleteProduct = (id: string) =>
  api.delete(`/products/${id}`);