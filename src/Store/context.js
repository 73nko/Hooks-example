import { createContext } from 'react';

const Store = createContext({
  todos: ['Buy milk', 'Some eggs', 'Go to work']
});

export default Store;
