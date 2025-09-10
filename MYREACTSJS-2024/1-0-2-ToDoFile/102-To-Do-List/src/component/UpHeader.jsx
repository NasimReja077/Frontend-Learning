import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UpHeader({ Todo, setTodo, ToDos, setToDos }) {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (Todo.trim() !== '') {
      setToDos([...ToDos, { id: uuidv4(), Todo, isCompleted: false }]);
      setTodo('');
      localStorage.setItem("todos", JSON.stringify([...ToDos, { id: uuidv4(), Todo, isCompleted: false }]));
    }
  };

  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl}) no-repeat center`,
          backgroundSize: 'cover',
        }}
        className="pt-40 px-1 md:px-8 text-center relative text-white font-bold text-4xl md:text-3xl overflow-auto"
      >
        <h1 className="pb-3" style={{ marginBottom: '65px' }}>TODAY TODO LIST</h1>
      </div>
      <div id='Search bear'>
        <label
          className="mx-auto mt-6 relative min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-xl focus-within:border-gray-300"
          htmlFor="search-bar"
          style={{ marginTop: '-40px' }}
        >
          <input
            onChange={handleChange}
            value={Todo}
            id="search-bar"
            placeholder="Add Your Today TODO List"
            className="px-6 py-2 w-full rounded-lg flex-1 outline-none text-black shadow-md focus:shadow-lg transition-shadow duration-300"
            style={{ fontSize: '15px' }}
          />
          <button
            onClick={handleAdd}
            disabled={Todo.length <= 2}
            className="w-full md:w-auto px-6 py-3 disabled:bg-violet-950 bg-black border-black text-white fill-white hover:bg-gray-800 active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-lg transition-all disabled:opacity-70"
          >
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">ADD</span>
              </div>
            </div>
          </button>
        </label>
      </div>
    </>
  );
}

export default UpHeader;
