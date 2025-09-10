import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, removeTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editTodo(todo.id, newText);
    }
  };

  return (
    <li className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''}`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={handleEdit}
          className="text-blue-500 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => removeTodo(todo.id)}
          className="text-red-500 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faCheckCircle}
          onClick={() => toggleComplete(todo.id)}
          className="text-green-500 cursor-pointer"
        />
      </div>
    </li>
  );
};

export default TodoItem;
