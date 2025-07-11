import { use, useEffect, useState } from 'react'
import { MdCheck, MdDelete  } from "react-icons/md";
import './Todo.css'

const Todo = () => {

    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const [dateTime, setDateTime] = useState("")

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

    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date()
            const formattedDate = now.toLocaleDateString()
            const formattedTime = now.toLocaleTimeString()
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    const handleDeleteToDo = (value) => {
        console.log(value);
        const updatedTask = task.filter((data) => data != value)
        setTask(updatedTask)
    }

    useEffect(() => {
        console.log(task);
    }, [task])

    const handleClearAllData = () => {
        setTask([])
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{dateTime ? dateTime : "Loading  Date-Time..."}</h2>
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
                                    <button className='delete-btn' onClick={() => handleDeleteToDo(currTask)}>
                                        <MdDelete />
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section className='clear-btn'>
                <button onClick={() => handleClearAllData()}>Clear All</button>
            </section>
        </section>
    )
}

export default Todo 