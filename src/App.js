import React, { useState } from "react"
import './App.css';

//importing components
import Form from './components/form';
import TodoList from "./components/todolist";

function App() {
  const [inputText, setInputText] = useState(""); //setting state to get input text
  const [todos, setTodos] = useState([]); //setting state to add todos into an array
  return (
    <div className="App">
      <header>
        <h1>Biancas Todo List</h1>
      </header>
      {/* passing these down as props to use in form.js */}
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/> 
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
