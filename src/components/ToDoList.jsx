
import { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Today");

  const handleAdd = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, category }]);
    setNewTask('');
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen  italic bg-purple-800 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 p-5">
      <div className="w-80 flex flex-col gap-3 items-center">
        <h1 className="text-white text-3xl font-bold text-center mb-3">To Do List</h1>

        <input
          type="text"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
         className="bg-transparent  border-2  text-white placeholder-white border-yellow-600 w-full p-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"

        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg bg-yellow-600 text-center text-white hover:bg-yellow-500 shadow-lg transition-all duration-300 hover:scale-105 "
        >
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>

        <button
          onClick={handleAdd}
          className="w-full p-2 mt-2 text-white italic bg-amber-600 hover:bg-amber-500 rounded-lg font-bold  shadow-lg transition-all duration-300 hover:scale-105 "
        >
          Add
        </button>

        <div className="w-full mt-5 flex flex-col gap-2">
          {tasks.length === 0 && <p className="text-center text-white font-bold italic">No tasks yet</p>}
          {tasks.map((task, index) => (
            <div key={index} className="flex justify-between italic items-center bg-gray-200 p-2 rounded-lg  shadow-lg transition-all duration-300 hover:scale-105">
              <span>{task.text} - {task.category}</span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-purple-600 text-white italic p-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToDoList;


