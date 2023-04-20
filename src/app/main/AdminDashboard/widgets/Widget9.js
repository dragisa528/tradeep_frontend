import { memo } from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Widget9() {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden p-12">
      <div className="table-responsive">
        <div className="flex w-full">
          <Button>
            <Typography className="px-3 py-2 bg-gray-500 rounded">Admin</Typography>
          </Button>
        </div>
        <div className="flex flex-col w-full">
          <Typography component="p" className="text-14 font-bold ml-4 mb-8">
            An admin has full control over the settings and assets on the platform (organization
            members, projects, experiments and deployment).
          </Typography>
          <Typography component="p" className="text-14 font-bold ml-4 mb-8">
            Only admin can invite and remove members from the organization or change their roles.
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default memo(Widget9);
