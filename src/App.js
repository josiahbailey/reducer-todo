import React, { useState, useReducer } from 'react';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import { todoReducer, initialState } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const newTodo = str => {
    dispatch({ type: 'NEW_TODO', payload: str})
  }

  const toggleCompleted = id => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id})
  }
  return (
    <div className="App">
      <TodoForm newTodo={newTodo} />
      <TodoList toggleCompleted={toggleCompleted} todoData={state.data} />
    </div>
  );
}

export default App;
