import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Store from '../Store/context';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

const TodoForm = ({ classes }) => {
  const { dispatch } = useContext(Store);

  const [todo, setTodo] = useState('');

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <form
      className={classes.container}
      autoComplete="off"
      onSubmit={e => e.preventDefault()}
    >
      <TextField
        id="outlined-name"
        label="Add todo"
        className={classes.textField}
        autoFocus={true}
        placeholder="Enter new todo"
        onKeyUp={handleSubmitForm}
        onChange={handleTodoChange}
        margin="normal"
        variant="outlined"
      />
      <Button
        className={classes.Button}
        color="primary"
        onClick={handleTodoAdd}
      >
        Click me
      </Button>
    </form>
  );
};
export default withStyles(styles)(TodoForm);
