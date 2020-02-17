import React from 'react';

const TodoForm = () => {
    const handleChange = e => {
        
    }
    return (  
        <form onSubmit={handleSubmit}>
            Add new items to your list<br/>
            <input onChange={handleChange} type='text' placeholder='todo'/>
        </form>
    );
}
 
export default TodoForm;