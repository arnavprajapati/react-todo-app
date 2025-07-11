import { useState } from 'react'
import { MdCheck, MdDelete  } from "react-icons/md";
import './Todo.css'

const Todo = () => {

    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("");  
            return
        };
        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");  
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask, index) => {
                            return (
                                <li key={index} className='todo-item'>
                                    <span>{currTask}</span>
                                    <button className='check-btn'>
                                        <MdCheck />
                                    </button>
                                    <button className='delete-btn'>
                                        <MdDelete />
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}

export default Todo 