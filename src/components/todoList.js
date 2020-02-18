import React from 'react';
import TodoCard from './todoCard'

const TodoList = ({ toggleCompleted, todoData }) => {
    return (  
        <div>
            {todoData.map(todo => (
                <TodoCard key={todo.id} toggleCompleted={toggleCompleted} todo={todo}/>
        ))}
        </div>
    );
}
 
export default TodoList;