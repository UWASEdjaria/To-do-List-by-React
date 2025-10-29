import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Today");
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, category, x: 0, y: 0 }]);
    setNewTask("");
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  // Mouse down starts dragging
  const handleMouseDown = (e, index) => {
    setDraggingIndex(index);
    const task = tasks[index];
    setOffset({
      x: e.clientX - task.x,
      y: e.clientY - task.y,
    });
  };

  // Mouse move while dragging
  const handleMouseMove = (e) => {
    if (draggingIndex === null) return;
    const t = [...tasks];
    t[draggingIndex].x = e.clientX - offset.x;
    t[draggingIndex].y = e.clientY - offset.y;
    setTasks(t);
  };

  // Mouse up stops dragging
  const handleMouseUp = () => setDraggingIndex(null);

  return (
    <section
      className="flex flex-col w-72 justify-center items-center rounded-xl min-h-screen bg-purple-800 p-5 relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="w-full flex flex-col gap-3 items-center">
        <h1 className="text-white text-2xl font-bold text-center mb-3">
          To Do List
        </h1>

        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
          className="bg-transparent border-2 text-white border-yellow-600 w-full p-2 rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg bg-yellow-600 text-white text-center"
        >
          <option>Today</option>
          <option>Tomorrow</option>
        </select>

        <button
          onClick={addTask}
          className="w-full p-2 text-white bg-amber-600 rounded-full"
        >
          Add
        </button>

        <div className="w-full mt-5 relative" style={{ minHeight: "400px" }}>
          {tasks.length === 0 && (
            <p className="text-white text-center animate-ping">No tasks yet</p>
          )}

          {tasks.map((t, i) => (
            <div
              key={i}
              onMouseDown={(e) => handleMouseDown(e, i)}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-lg shadow-lg cursor-grab select-none"
              style={{
                marginBottom: "25px",
                position: "relative",
                left: t.x,
                top: t.y,
                width: "90%",
                zIndex: draggingIndex === i ? 40 : 1,
              }}
            >
              <span>
                {t.text} - {t.category}
              </span>
              <button
                onClick={() => deleteTask(i)}
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
