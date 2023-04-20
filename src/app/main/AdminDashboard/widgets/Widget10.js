import { memo } from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Widget10() {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden p-12">
      <div className="table-responsive">
        <div className="flex w-full">
          <Button>
            <Typography className="px-3 py-2 bg-gray-500 rounded">Editor</Typography>
          </Button>
        </div>
        <div className="flex flex-col w-full">
          <Typography component="p" className="text-14 font-bold ml-4 mb-8">
            An Editor has develop access to most assets - projects, experiments and deployments.
          </Typography>
          <Typography component="p" className="text-14 font-bold ml-4 mb-8">
            Editor can initiate new projects, upload datasets, experiment with models and deploy
            them.
          </Typography>
          <Typography component="p" className="text-14 font-bold ml-4 mb-8">
            Editor can delete projects, datasets and experiments to remove obsolete content.
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default memo(Widget10);
