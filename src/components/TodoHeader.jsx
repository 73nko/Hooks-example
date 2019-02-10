import React from 'react';
import Typography from '@material-ui/core/Typography';

export const TodoHeader = props => (
  <div className="row">
    <div className="col-md-8">
      <h5>Todo List</h5>
    </div>
    <div className="col-md-4">{props.children}</div>
  </div>
);
