import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Store from '../Store/context';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.blueGrey
  }
});

const TodoList = ({ classes }) => {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    state.todos.length === 0 ? (
      <Typography variant="h4" gutterBottom>
        Yay! All todos are done! Take a rest!
      </Typography>
    ) : (
      <Typography variant="h4" gutterBottom>
        {pluralize(state.todos.length)}
      </Typography>
    );
  return (
    <>
      {header}
      <List className={classes.root}>
        {state.todos.map((t, i) => (
          <ListItem
            key={i}
            dense
            button
            onClick={() => dispatch({ type: 'COMPLETE', payload: t })}
          >
            <ListItemText primary={t} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default withStyles(styles)(TodoList);
