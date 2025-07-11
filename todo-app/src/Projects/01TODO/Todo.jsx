import { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        if (task.includes(inputValue)) return;
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
        </section>
    )
}

export default Todo 