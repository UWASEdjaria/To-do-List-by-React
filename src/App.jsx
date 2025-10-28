import DragAndDrop from './components/DragAndDrop';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-900 p-5">
      <DragAndDrop/>
      <ToDoList/>
    </div>
  );
}

export default App;
