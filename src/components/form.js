import React from "react"

// passing these props into form function to use in form.js
const Form = ({ setInputText, todos, setTodos, inputText }) => {
    //function that helps set state and add what is inputted into the todo list
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);

    };
    //function that helps set state and store the todos in an array with other props added, 
    //then makes the input empty again
    const submitTodoHandler = (e) => {
        e.preventDefault();  //prevents refresh when button is clicked
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random()* 10}
        ]); //spreading todos into a array setting that to setTodos w/ added props
        setInputText(""); //making input empty again after
    };
   
    return(
    <form>      
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;