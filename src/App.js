import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ExampleUseEffect from './ExampleUseEffect';
import CreatingOwnHooks from './CreatingOwnHooks';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

const SimpleTabs = props => {
  const { classes } = props;
  const [tabPosition, setTabPosition] = useState(1);
  const changeTab = (event, val) => setTabPosition(val);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={tabPosition} onChange={changeTab}>
          <Tab label="Example of UseEffect" />
          <Tab label="Creating Own Hooks" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {tabPosition === 0 && (
        <TabContainer>
          <ExampleUseEffect />
        </TabContainer>
      )}
      {tabPosition === 1 && (
        <TabContainer>
          <CreatingOwnHooks />
        </TabContainer>
      )}
      {tabPosition === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
  );
};

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
