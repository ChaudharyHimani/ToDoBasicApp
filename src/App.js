import { useState } from 'react';
import './App.css';
import InsertTodo from './components/InsertTodo/InsertTodo';
import ListTodo from './components/ListTodo/ListTodo';

function App() {
  const[todos , setTodos] = useState([]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Todo App</h1>
      </div>
      <InsertTodo todos = {todos} setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
