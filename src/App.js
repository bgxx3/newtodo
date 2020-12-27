import React, { useState, useEffect } from "react"
import './App.css';

//importing components
import Form from './components/form';
import TodoList from "./components/todolist";

function App() {
  //state stuff
  const [inputText, setInputText] = useState(""); //setting state to get input text
  const [todos, setTodos] = useState([]); //setting state to add todos into an array
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Biancas Todo List</h1>
      </header>
      {/* passing these down as props to use in form.js */}
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText} 
      setStatus={setStatus}
      filteredTodos={filteredTodos}/> 
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
