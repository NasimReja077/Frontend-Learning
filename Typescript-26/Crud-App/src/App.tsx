import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      
      {/* Navbar */}
      <nav className="bg-white/20 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">CRUD App</h1>

        <div className="flex gap-4">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="text-white hover:text-gray-200 transition"
          >
            Add Product
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}