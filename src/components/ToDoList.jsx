
import {useState} from 'react'


 function ToDoList() {

  const[newTask ,setNewTask] =useState("");
  const[category, setCategory] =useState("today");
 
  return (
    <section className="flex w-full flex-col md:flex-wrap justify-center items-center min-h-screen font-sans">

        {/* ToDoList input*/}

        <div className='w-80 h-60 text-white'>
            <h1 className='text-center p-5 mb-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-sans transition-all duration-200 hover:scale-105'>To Do List</h1>
            <div className='flex flex-row md:flex-row gap-3 w-full items-center'>
            <input className='border-2  p-2  w-full items-center  rounded-lg'
            type='text'
            placeholder='Enter task ......'
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            />
             
            <select  value={category} onChange={(e)=>setCategory(e.target.value)}
             className='italic rounded-lg p-2 font-bold bg-gray-600'
            >
              <option>Today</option>
              <option>Tomorrow</option>
            </select>

           <button
           className='italic rounded-lg p-2 font-bold bg-amber-400 hover'
           type='submit'
           onClick={()=>console.log(newTask)}
           >Add</button>
         </div>
        </div>
    </section>
  )
}
export default ToDoList

