import React from 'react';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
