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

  const handleSubmitForm = (event) => (event.keyCode === 13) && handleTodoAdd();


  return (
    <header className="header">
      <input type="text"
             id="todo-input"
             value={todo}
             className="new-todo"
             placeholder="Enter new todo"
             autoFocus={true}
             onKeyUp={handleSubmitForm}
             onChange={handleTodoChange}
             onBlur={handleTodoAdd} />
    </header>
  );
};

export default TodoForm;
