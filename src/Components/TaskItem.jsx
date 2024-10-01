import React, { useEffect, useState } from 'react';

function TaskItem(props) {
const [showField,setShowField] = useState(false) 

const [title, setTitle] = useState('') 

useEffect(() => {
    setTitle(props.task.title)
}, [props.task.title])

function update(){
    setShowField(!showField)
    if (showField){
        props.updateTask({...props.task, title})
    }
}


    return (
        <>
            <li className="pt-6 pb-6 sm:pb-8">
                <div className="flex items-center justify-between rtl:space-x-reverse">
                    <div className="flex-1 min-w-0">
                        <p className="text-lg font-semibold text-gray-900 truncate">
                            {
                                showField ? <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                name="floating_text"
                                id="floating_text"
                                className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            /> :  <span className={props.task.completed ? 'line-through' : ''}>
                                        {props.task.id} {props.task.title}
                                    </span>
                            }
                        </p>
                    </div>
                    {/* Buttons Section */}
                    <div className="flex space-x-2 ml-4">
                        <button
                            onClick={() => props.toggleTask(props.task.id)}
                            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Toggle
                        </button>
                        <button
                            onClick={update} // example update
                            className="text-white bg-green-500  hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            {showField ? <span className='text-red-700' >Validate</span> : 'Update'}
                        </button>
                        <button
                            onClick={() => props.deleteTask(props.task.id)}
                            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TaskItem;
