import React from "react";

const Navbar = () => {
  return (
    <section className="text-center bg-white py-6">
      {/* Top Texts */}
      <div className="text-gray-700 text-lg">Welcome, to Education Hub</div>
      <h1 className="text-3xl font-semibold text-gray-800 mt-2">Admin Table</h1>

      {/* Subtitle */}
      <div className="text-gray-600 mt-2">
        One Destination for complete Web Development
      </div>

      {/* Navigation */}
      <nav className="mt-8 bg-gray-100 py-4">
        <ul className="flex flex-wrap justify-center gap-8 md:gap-20">
          {["Home", "About", "Projects", "Code", "Contact"].map((item) => (
            <li key={item} className="relative group uppercase text-lg font-medium text-gray-500">
              <a
                href="/"
                className="relative transition-all duration-500 ease-in-out overflow-hidden before:content-[attr(data-item)] before:absolute before:inset-0 before:text-[#8254ff] before:w-0 before:overflow-hidden before:transition-all before:duration-500 hover:before:w-full"
                data-item={item}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
