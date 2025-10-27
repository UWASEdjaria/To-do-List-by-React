import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]); 

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          {task.text} - {task.category}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
