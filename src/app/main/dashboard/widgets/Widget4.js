import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';
import img1 from '@assets/images/dashboard/cover1.png';
import { Button } from '@material-ui/core';

function Widget4(props) {
  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between p-10">
      <div className="flex items-center justify-between px-4 pt-8">
        <Typography component="img" src={img1} />
      </div>
      <div className="flex items-center justify-between pt-8">
        <Typography className="text-16 font-medium" color="textSecondary">
          Trading With Machine Learning Deep Leanring
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

export default memo(Widget4);
