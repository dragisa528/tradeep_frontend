import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import { Tab, Tabs, Box,Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 660,
    backgroundColor: theme.palette.background.paper,
  },
}));

function EmailTab () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleToggle = value => () => {
    setState({ ...state, [value]: !state[value] });
  };

  return (
   <>
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary="Notification" secondary="Receive notifications for important updates" />
        <Switch
          edge="end"
          onChange={handleToggle('checkedA')}
          checked={state.checkedA}
          inputProps={{ 'aria-labelledby': 'switch-list-label-notification' }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Email" secondary="Receive email notifications" />
        <Switch
          edge="end"
          onChange={handleToggle('checkedB')}
          checked={state.checkedB}
          inputProps={{ 'aria-labelledby': 'switch-list-label-email' }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="SMS" secondary="Receive SMS notifications" />
        <Switch
          edge="end"
          onChange={handleToggle('checkedC')}
          checked={state.checkedC}
          inputProps={{ 'aria-labelledby': 'switch-list-label-sms' }}
        />
      </ListItem>
    </List>
    <Button
          color="secondary"
          variant="contained"
          className="w-160 mt-12"
          // onClick={(ev) => dispatch(openNewModelDialog())}
        //   component={Link}
        //   to="/model"
        >
        Save Change
        </Button>
   </>
  );
}


export default EmailTab;