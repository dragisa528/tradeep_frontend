import { TextField, Button, ButtonGroup } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { memo, useState } from 'react';

function Widget11(props) {
  const [selectedBtn, setSelectedBtn] = useState(-1);
  const [email, setEmail] = useState('');

  function onSubmit(model) {
    // dispatch(submitResetPassword(model, routeParams.token));
  }

  function handleChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <Paper className="w-full rounded-20 shadow">
      <form className="flex flex-col justify-center w-full" onSubmit={onSubmit}>
        <div className="flex items-center justify-between flex-col p-20 ">
          <Typography className="text-20 font-medium" color="secondary text-left">Invite New Member</Typography>
          <TextField
            className="my-6"
            id="outlined-basic"
            label="Enter Email Address"
            variant="outlined"
            value={email}
            onChange={handleChange}
          />
          <ButtonGroup disableElevation variant="contained" color="primary" className="my-6">
            <Button
              color={selectedBtn === 1 ? 'secondary' : 'primary'}
              onClick={() => setSelectedBtn(1)}
            >
              Admin
            </Button>
            <Button
              color={selectedBtn === 2 ? 'secondary' : 'primary'}
              onClick={() => setSelectedBtn(2)}
            >
              Editor
            </Button>
          </ButtonGroup>
          <Button type="submit" variant="contained" color="secondary" className="mx-20 my-16">
            Send Invite
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default memo(Widget11);
