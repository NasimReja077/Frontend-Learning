import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, removeTodo, toggleComplete, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
