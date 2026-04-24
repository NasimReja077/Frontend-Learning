import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/localApi";
import type { Product } from "../types";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const data = getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success("Product Deleted");
    fetchData();
  };

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = products.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Products</h1>

        <Link
          to="/create"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
        >
          + Add Product
        </Link>
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center text-white mt-10">
          No Products Found 😢
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginated.map((p) => (
          <div
            key={p._id}
            className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-4 hover:scale-105 transition"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />

            {/* Info */}
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600 mb-2">₹{p.price}</p>

            {/* Actions */}
            <div className="flex justify-between items-center mt-3">
              <Link
                to={`/edit/${p._id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit size={18} />
              </Link>

              <button
                onClick={() => handleDelete(p._id!)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {products.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-1 rounded ${
                page === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}