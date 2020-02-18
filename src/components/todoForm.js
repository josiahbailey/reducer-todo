import React, { useState } from 'react';

const TodoForm = ({ newTodo, clearCompleted }) => {
    const [todo, setTodo] = useState('')
    const handleChange = e => {
        setTodo(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (todo !== '') {
            newTodo(todo)
        }
        setTodo('')
    }
    return (
        <form onSubmit={handleSubmit}>
            Add new items to your list<br />
            <input value={todo} onChange={handleChange} type='text' placeholder='todo' />
            <input type='submit' /><br />
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;