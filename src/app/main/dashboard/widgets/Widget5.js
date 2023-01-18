import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';
import img2 from '@assets/images/dashboard/cover2.png';
import { Button } from '@material-ui/core';

function Widget5(props) {
  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between p-10">
      
      <div className="flex items-center justify-between pt-8">
        <Typography className="text-16 font-medium" color="textSecondary">
          Deploy a Deep Learning Model on Bitcoin
        </Typography>
      </div>
      <div className="flex items-center justify-end pt-8">
        <Button variant="outlined" color="secondary">
          Enroll Now
        </Button>
      </div>
    </Paper>
  );
}

export default memo(Widget5);
