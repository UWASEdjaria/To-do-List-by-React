import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Today");
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleAdd = () => {
    if (!newTask.trim()) return;
    const nextIndex = tasks.length;
    setTasks([
      ...tasks,
      { text: newTask, category, x: 20, y: 120 + nextIndex * 80 },
    ]);
    setNewTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // New function: update position only on drag end
  const handleDragEnd = (index, e) => {
    const rect = e.currentTarget.parentElement.getBoundingClientRect();
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      x: e.clientX - rect.left - e.currentTarget.offsetWidth / 2,
      y: e.clientY - rect.top - e.currentTarget.offsetHeight / 2,
    };
    setTasks(newTasks);
    setDraggingIndex(null);
  };

  return (
    <section className="flex flex-col w-72 justify-center items-center rounded-xl min-h-screen bg-purple-800 p-5 relative">
      <div className="w-full max-w-md flex flex-col gap-3 items-center">
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-3">
          To Do List
        </h1>

        <input
          type="text"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="bg-transparent border-2 text-white placeholder-white border-yellow-600 w-full p-2 rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg bg-yellow-600 text-white text-center"
        >
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>

        <button
          onClick={handleAdd}
          className="w-full p-2 mt-2 text-white bg-amber-600 rounded-full"
        >
          Add
        </button>

        <div className="w-full mt-5 relative" style={{ minHeight: "400px" }}>
          {tasks.length === 0 && (
            <p className="text-white text-center animate-ping">No tasks yet</p>
          )}

          {tasks.map((task, index) => (
            <div
              key={index}
              draggable
              onDragEnd={(e) => handleDragEnd(index, e)}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-lg shadow-lg cursor-grab select-none"
              style={{
                position: "absolute",
                left: `${task.x}px`,
                top: `${task.y}px`,
                width: "90%",
                maxWidth: "320px",
                zIndex: draggingIndex === index ? 50 : 10,
              }}
              onMouseDown={() => setDraggingIndex(index)}
            >
              <span>
                {task.text} - {task.category}
              </span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-purple-600 text-white p-1 rounded-full hover:bg-red-600"
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
