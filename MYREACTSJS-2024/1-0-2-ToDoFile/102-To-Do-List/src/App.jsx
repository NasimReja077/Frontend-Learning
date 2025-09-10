import React, { useState, useEffect } from 'react';
import UpHeader from './component/UpHeader';
import TodoBox from './component/TodoBox';

function App() {
  const [Todo, setTodo] = useState("");
  const [ToDos, setToDos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];
    setToDos(todosFromStorage);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <UpHeader Todo={Todo} setTodo={setTodo} ToDos={ToDos} setToDos={setToDos} />
      <TodoBox ToDos={ToDos} setToDos={setToDos} setTodo={setTodo} showFinished={showFinished} setShowFinished={setShowFinished} />
    </div>
  );
}

export default App;
