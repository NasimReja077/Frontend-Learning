import React from 'react';
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineWarningAmber } from "react-icons/md";

function TodoBox({ ToDos, setToDos, setTodo, showFinished, setShowFinished }) {
  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = ToDos.findIndex(item => item.id === id);
    const newToDos = [...ToDos];
    newToDos[index].isCompleted = !newToDos[index].isCompleted;
    setToDos(newToDos);
    localStorage.setItem("todos", JSON.stringify(newToDos));
  };

  const handleEdit = (e, id) => {
    const t = ToDos.find(item => item.id === id);
    setTodo(t.Todo);
    const newTodos = ToDos.filter(item => item.id !== id);
    setToDos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (e, id) => {
    const newTodos = ToDos.filter(item => item.id !== id);
    setToDos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="flex justify-center items-center h-auto">
      <div className="w-full md:w-[63%] p-4 mt-16 min-h-[51vh] bg-gradient-to-r from-teal-400 to-teal-600 border border-gray-200 rounded-lg shadow-lg">
        <h2 className='text-2xl font-bold text-white text-center mb-4'>Today's Tasks</h2>
        <div className='flex items-center mb-4'>
          <input className='w-4 h-4 mr-2' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label htmlFor="show" className='text-lg font-semibold text-white'>Show Completed Tasks</label>
        </div>
        <div className='ToDos space-y-4'>
          {ToDos.length === 0 && (
            <div className='text-center text-white mt-7'>
              <MdOutlineWarningAmber className="inline-block text-2xl" /> No Todos to display
            </div>
          )}
          {ToDos.map(todo => (
            (showFinished || !todo.isCompleted) && (
              <div key={todo.id} className={`Todo flex items-center justify-between p-4 bg-white rounded-lg shadow ${todo.isCompleted ? 'opacity-70' : ''}`}>
                <div className="flex items-center space-x-4">
                  <input
                    name={todo.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={todo.isCompleted}
                    className="w-6 h-6"
                  />
                  <div className={`text-lg ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}>{todo.Todo}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={(e) => handleEdit(e, todo.id)} className='p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-700 transition'>
                    <AiTwotoneEdit />
                  </button>
                  <button onClick={(e) => handleDelete(e, todo.id)} className='p-2 rounded-full bg-red-500 text-white hover:bg-red-700 transition'>
                    <MdOutlineDeleteForever />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoBox;
