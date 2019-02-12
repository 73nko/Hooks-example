import React, { useContext, useState } from "react";

import Store from "../Store/context";

const TodoForm = () => {

  const { dispatch } = useContext(Store);
  const [todo, setTodo] = useState("");
  
  const handleTodoChange = (e) => setTodo(e.target.value);

  const handleTodoAdd = () => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  const handleSubmitForm = (event) => {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <header className="header">
      <input type="text" id="todo-input" className="new-todo" autoFocus={true} placeholder="Enter new todo" onKeyUp={handleSubmitForm} onChange={handleTodoChange} onBlur={handleTodoAdd} />
    </header>
  );
};

export default TodoForm;
