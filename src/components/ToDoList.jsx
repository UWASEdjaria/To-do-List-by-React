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

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen bg-purple-800 p-5 relative"
      onMouseMove={(e) => {
        if (draggingIndex === null) return;
        const newTasks = [...tasks];

        // Make sure item stays inside screen
        const x = Math.min(
          Math.max(0, e.clientX - 50),
          window.innerWidth - 100
        );
        const y = Math.min(
          Math.max(0, e.clientY - 20),
          window.innerHeight - 60
        );

        newTasks[draggingIndex].x = x;
        newTasks[draggingIndex].y = y;
        setTasks(newTasks);
      }}
      onMouseUp={() => setDraggingIndex(null)}
    >
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
          className="w-full p-2 mt-2 text-white bg-amber-600 rounded-lg"
        >
          Add
        </button>

        <div className="w-full mt-5 relative" style={{ minHeight: "400px" }}>
          {tasks.length === 0 && (
            <p className="text-white text-center">No tasks yet</p>
          )}

          {tasks.map((task, index) => (
            <div
              key={index}
              onMouseDown={() => setDraggingIndex(index)}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-lg shadow-lg cursor-move select-none"
              style={{
                position: "absolute",
                left: `${task.x}px`,
                top: `${task.y}px`,
                width: "90%", // responsive width
                maxWidth: "320px", // max for larger screens
                zIndex: draggingIndex === index ? 50 : 10,
              }}
            >
              <span>
                {task.text} - {task.category}
              </span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-purple-600 text-white p-1 rounded hover:bg-red-600"
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
