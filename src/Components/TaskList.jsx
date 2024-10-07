import React, { useEffect, useReducer, useState } from 'react';
import TaskItem from './TaskItem';
import { initialState, reducer } from '../Reducer';
import TaskForm from './TaskForm';
import { useSelector } from 'react-redux';
import TaskFilter from './TaskFilter';


function TaskList() {
const tasks = useSelector((state) => state.task.TaskList)

const filter = useSelector((state) => state.task.filter)

    const loadTasksFromLocalStorage = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            return JSON.parse(storedTasks); // Parse and return tasks from localStorage
        }
        return initialState.TaskList; // Return initial tasks if none found
    };

    const [state, dispatch] = useReducer(reducer, { TaskList: loadTasksFromLocalStorage() });


    const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility

    function filtered(){
        switch (filter){
            case 'all': return tasks;

            case 'active': return tasks.filter((item) => !item.completed)

            case 'completed': return tasks.filter((item) => item.completed)

            default : return tasks;
        }
    }

useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.TaskList))
    console.log('brjvr')
}, [state.TaskList])

    const toggleFormVisibility = () => {
      setIsFormVisible((prev) => !prev); // Toggle the form visibility
    };

    return (
        <div>
        <button
            type="button"
            onClick={toggleFormVisibility} // Toggle form visibility on click
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            New Task
        </button>
        {isFormVisible && <TaskForm toggleFormVisibility={toggleFormVisibility}/>} {/* Render TaskForm conditionally */}
        <TaskFilter/>
        <ul>
            {filtered().map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
        </div>
    );
}

export default TaskList;