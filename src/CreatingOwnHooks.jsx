import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';

import Store from './Store/context';
import reducer from './Store/reducer';

import { usePersistedContext, usePersistedReducer } from './Hooks/usePersist';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const CreatingOwnHooks = () => {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), 'state');

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state' // The localStorage key
  );

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </Store.Provider>
  );
};

export default CreatingOwnHooks;
