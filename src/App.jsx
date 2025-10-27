import './App.css';
import './index.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center p-5 w-full max-w-md">
      <div className="flex flex-col-reverse w-full gap-2">
        <TaskList tasks={tasks} setTasks={setTasks} />
        <ToDoList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
