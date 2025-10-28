# 📝 React ToDo App

A simple React ToDo List app where you can add tasks, choose a category, delete tasks, and reorder them with drag-and-drop. Built with React, Tailwind CSS, and react-beautiful-dnd.

# Features

Add new tasks with text input.

Select a category: Today or Tomorrow.

Display tasks in a list immediately below the input.

Delete individual tasks.

Reorder tasks using drag-and-drop.

Fully responsive and beginner-friendly UI using Tailwind CSS.

# Folder Structure
my-todo-app/
│
├─ src/
│  ├─ components/
│  │   ├─ ToDoList.jsx       # Input + add tasks and 
                             # Task display + delete + drag-drop
│  │   └     
│  │
│  ├─ App.jsx                # Main app
│  ├─ index.js               # Entry point
│  ├─ App.css                # App styling
│  └─ index.css              # Global styles

Installation

Clone the repository:

git clone <https://github.com/UWASEdjaria/To-do-List-by-React>
cd my-todo-app


# Install dependencies:

npm install


Start the development server:

npm start


Your app will run on: http://localhost:3000

Deployment (Vercel)

Push your project to GitHub.

Go to Vercel
 and import your GitHub repo.

Vercel auto-detects React apps:

Build command: npm run build

Output directory: build

Click Deploy. Your app will be live instantly.

Dependencies

React

Tailwind CSS

react-beautiful-dnd

Usage

Type a task in the input box.

Select the category.

Click Add to save it.

Drag tasks to reorder.

Click Delete to remove a task.