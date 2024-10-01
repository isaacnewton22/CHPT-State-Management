import './App.css'
import { useState } from 'react'; // Import useState to manage state
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'

function App() {  
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-1/3 flex flex-col justify-center items-center'>
        <div className='flex justify-start w-full'>
        </div>
        <TaskList />
      </div>
    </div>
  )
}

export default App
