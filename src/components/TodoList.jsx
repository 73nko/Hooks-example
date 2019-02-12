import React, { useContext } from 'react';
import Store from '../Store/context';


const TodoList = () => {
  const { state, dispatch } = useContext(Store);
  const itemWord = state.todos.length === 1 ? 'item' : 'items';
  
  return (
    <section className="main">
      <ul className="todo-list">
        {state.todos.map((t, i) => (
          <li key={i}>
            <div className="view">
              <label>{t}</label>
              <button className="destroy" onClick={() => dispatch({ type: 'COMPLETE', payload: t })} />
            </div>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>{state.todos.length || 'No'}</strong> {itemWord} left
        </span>
      </footer>
    </section>
  );
};
export default TodoList;


