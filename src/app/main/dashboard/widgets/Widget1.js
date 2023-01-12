import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { memo, useState } from 'react';

function Widget1(props) {
  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-around">
      <div className="flex items-center justify-between px-4 pt-8">
        <div className="text-left py-12 pl-6">
          <Typography className="text-18 font-semibold leading-none text-white tracking-tighter">
            Compute Time
          </Typography>
          <div className="text-left p-3 flex">
            <Typography className="text-28 text-white font-900">
              3
            </Typography>
            <div className="text-left p-3">
              <Typography className="text-12 text-white font-normal">Hours</Typography>
              <Typography className="text-10 text-white font-200 ">Available</Typography>
            </div>
          </div>
        </div>
        <div className="text-left py-12">
          <Typography className="text-18 font-semibold leading-none text-white tracking-tighter">
            Storage
          </Typography>
          <div className="text-left p-3 flex">
            <Typography className="text-28 text-white font-900">
              20
            </Typography>
            <div className="text-left p-3">
              <Typography className="text-12 text-white font-normal">GB</Typography>
              <Typography className="text-10 text-white font-200 ">Available</Typography>
            </div>
          </div>
        </div>
        <div className="text-left py-12">
          <Typography className="text-18 font-semibold leading-none text-white tracking-tighter">
            Member (1/1)
          </Typography>
          <div className="text-left p-6 flex">
            <div className="text-18 font-semibold text-white rounded-full bg-gray-800 w-32 h-32 text-center flex items-center justify-center">
              S
            </div>
          </div>
        </div>
        <div className="text-left py-12 pr-6">
          <Typography className="text-18 font-semibold leading-none text-white tracking-tighter">
            Plan
          </Typography>
          <div className="text-left p-3 flex">
            <Typography className="text-28 text-white font-900">Free</Typography>
            <div className="text-left p-3 felx flex-col-reverse">
              <Link className="text-10 text-green-200 font-200" to="/#">
                Upgrade
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Button type="button" variant="contained" color="secondary" className="mx-20 my-12 text-18">
        Manage Subscription
      </Button>
    </Paper>
  );
}

export default memo(Widget1);
