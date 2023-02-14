import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SwitchListSecondary() {
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
  );
}
