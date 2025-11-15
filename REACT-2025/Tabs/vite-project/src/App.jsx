/* eslint-disable react-hooks/immutability */
// API-Based Dynamic Tabs
// This example fetches categories from API → creates tabs dynamically
// Each tab loads its own content when clicked
// API used: https://fakestoreapi.com/products/categories
// Content API: https://fakestoreapi.com/products/category/<category>


import React, { useState, useEffect } from "react";

const App =()=> {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) fetchItems(categories[active]);
  }, [categories, active]);

  async function fetchItems(category) {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await res.json();
    setItems(data);
    setLoading(false);
  }
 return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Dynamic API Tabs</h2>

      {/* TAB BUTTONS */}
      <div className="flex gap-2 border-b mb-4 overflow-x-auto">
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => setActive(index)}
            className={`px-4 py-2 rounded-t-lg text-sm whitespace-nowrap transition
              ${active === index ? "bg-white border-b-0 border shadow-sm" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="p-4 bg-white border rounded-b-lg min-h-[150px]">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="border p-3 rounded shadow-sm">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App

