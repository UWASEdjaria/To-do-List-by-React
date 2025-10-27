import React from 'react'

function ToDoListForm() {
  return (
    <section className="flex w-full flex-col justify-center items-center min-h-screen mt-5 font-sans">

        {/* ToDoList form */}

        <form className='w-80 h-60 text-white'>
            <h1 className='text-center p-5 mb-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-sans transition-all duration-200 hover:scale-105'>To Do List</h1>
            <input className='border w-72 p-2  rounded-lg'
            type='text'
            placeholder='Enter task ......'/>

           <button>Add</button>

        </form>
    </section>
  )
}

export default ToDoListForm