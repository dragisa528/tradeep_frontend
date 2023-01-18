import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

function Widget4(props) {
  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between p-10">
      <div className="flex flex-col items-center justify-center items-center text-center pt-8 h-200">
        <Typography className="text-32 font-medium " color="textSecondary">
          Datapoints Analyzed
        </Typography>
        <Typography className="text-28 font-medium" color="textSecondary">
          56,969,000
        </Typography>
      </div>
    </Paper>
  );
}

export default memo(Widget4);
