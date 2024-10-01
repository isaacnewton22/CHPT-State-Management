import React, { useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../Reducer';

function TaskForm(props) {
    const [taskTitle, setTaskTitle] = useState('');

useEffect(() => {
    props.getTitle(taskTitle);
}, [taskTitle])

/* const [state, dispatch] = useReducer(reducer, initialState); */

function handleChange(event){
    event.preventDefault();
    setTaskTitle(event.target.value)
} 

    return (
    <>
        
        <form className="w-full max-w-lg mx-auto" onSubmit={props.handleSubmit} >
            <div className="relative z-0 m-8 mb-2 group">
                <input
                onChange={handleChange}
                value={taskTitle}
                type="text"
                name="floating_text"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                />
                <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                Title
                </label>
            </div>
            <button
                type="submit"
                className="mt-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
            <button onClick={props.toggleFormVisibility}
                type="button" 
                className="mt-2 mx-2 text-white bg-red-700 hover:bg-red-800  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
                Cancel
            </button>
    </form>

    </>
    )
    }

export default TaskForm