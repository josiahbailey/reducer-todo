import React from 'react';
import TodoCard from './todoCard'

const TodoList = ({ toggleCompleted, todoData }) => {
    return (
        <div className='list'>
            {todoData.map(todo => {
                return  <TodoCard key={todo.id} toggleCompleted={toggleCompleted} todo={todo} />
        })}
        </div>
    );
}

export default TodoList;