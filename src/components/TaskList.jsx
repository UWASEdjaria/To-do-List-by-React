import React from 'react';

function TaskList({ tasks, setTasks }) {
  const handleDelete = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col w-full">
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">No tasks yet</p>
      )}
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-gray-200 p-2 rounded mb-1 w-full"
        >
          <span>{task.text} - {task.category}</span>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
