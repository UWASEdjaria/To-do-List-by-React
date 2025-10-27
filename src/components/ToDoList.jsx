import React from 'react'

function ToDoListForm() {
  return (
    <section className="flex w-full flex-col justify-center items-center min-h-screen font-sans">

        {/* ToDoList form */}

        <div className='w-80 h-60 text-white'>
            <h1 className='text-center p-5 mb-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-sans transition-all duration-200 hover:scale-105'>To Do List</h1>
            <div className='flex gap-3'>
            <input className='border-2 w-72 p-2  rounded-lg'
            type='text'
            placeholder='Enter task ......'/>
             
            <select className='italic rounded-lg p-5 font-bold bg-gray-600'>
              <option>Today</option>
              <option>Tomorrow</option>
            </select>

           <button className='italic rounded-lg p-5 font-bold bg-amber-400 hover'>Add</button>
         </div>
        </div>
    </section>
  )
}

export default ToDoListForm