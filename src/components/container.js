import React, { useReducer } from 'react';
import TodoForm from './todoForm'
import TodoList from './todoList'
import { todoReducer, initialState } from '../reducers/todoReducer'

function Container() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const newTodo = str => {
    dispatch({ type: 'NEW_TODO', payload: str })
  }

  const toggleCompleted = id => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id })
  }

  const clearCompleted = e => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className='container'>
      <TodoForm clearCompleted={clearCompleted} newTodo={newTodo} />
      <TodoList toggleCompleted={toggleCompleted} todoData={state.data} />
    </div>
  );
}

export default Container;