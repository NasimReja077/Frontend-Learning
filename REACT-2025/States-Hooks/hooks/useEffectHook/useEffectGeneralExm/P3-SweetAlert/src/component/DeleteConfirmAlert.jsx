import React, { useState } from "react";
import Swal from "sweetalert2";

const DeleteConfirmAlert = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
        Swal.fire("Deleted!", "Your task has been removed.", "success");
      }
    });
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-3">
      <h2 className="text-xl font-semibold">Task List</h2>
      {tasks.map((task, i) => (
        <div
          key={i}
          className="flex justify-between w-64 bg-gray-100 p-2 rounded-lg"
        >
          <span>{task}</span>
          <button
            onClick={() => handleDelete(i)}
            className="bg-red-500 text-white px-3 rounded-md hover:bg-red-600"
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteConfirmAlert;
