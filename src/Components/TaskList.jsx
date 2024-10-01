import React, { useEffect, useReducer, useState } from 'react';
import TaskItem from './TaskItem';
import { initialState, reducer } from '../Reducer';
import TaskForm from './TaskForm';

function TaskList() {
    const loadTasksFromLocalStorage = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            return JSON.parse(storedTasks); // Parse and return tasks from localStorage
        }
        return initialState.TaskList; // Return initial tasks if none found
    };

    const [state, dispatch] = useReducer(reducer, { TaskList: loadTasksFromLocalStorage() });

    const [title, setTitle] = useState('');

    const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility

/*     useEffect(() => {
        const data = loadTasksFromLocalStorage()
        console.log('data', data);
        dispatch({
            type: 'LOAD_STATE',
            payload: loadTasksFromLocalStorage()
        });
    }, []) */
    
useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.TaskList))
    console.log('brjvr')
}, [state.TaskList])


    const toggleTask = (taskId) => {
        dispatch({ type: 'TOGGLE_TASK', payload: taskId });
    };

    const deleteTask = (taskId) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
    };

    const updateTask = (updatedTask) => {
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    };



    function handleSubmit(event){
        event.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            payload: {id: Date.now(), title: title , completed: false},
        })
    }

    function getTitle(Title){
        setTitle(Title)
    }

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
        {isFormVisible && <TaskForm getTitle={getTitle} handleSubmit={handleSubmit}  toggleFormVisibility={toggleFormVisibility}/>} {/* Render TaskForm conditionally */}
        <ul>
            {state.TaskList.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    updateTask={updateTask} // pass the update function
                    deleteTask={deleteTask} // pass the delete function
                />
            ))}
        </ul>
        </div>
    );
}

export default TaskList;