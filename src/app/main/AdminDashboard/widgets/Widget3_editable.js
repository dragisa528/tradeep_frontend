import { useState, memo } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import EditTable from '@fuse/editTable';

function Widget3(props) {
  const [selectedBtn, setSelectedBtn] = useState(-1);

  const options = {
    actionsColumnIndex: -1,
    tableLayout: 'auto',
  };

  const editable = {
    onRowAdd: (newData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // dispatch(addNewUser(newData));
          resolve();
        }, 1000);
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // dispatch(updateUser(oldData._id, newData));
          resolve();
        }, 1000)
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // dispatch(deleteUser(oldData));
          resolve();
        }, 1000);
      }),
  };
  const fields = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Status', field: 'status', lookup: { 1: 'Inactive', 2: 'Active' } },
    { title: 'Role', field: 'role', lookup: { 1: 'admin', 2: 'sender', 3: 'user' } },
  ];

  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden">
      <div className="flex items-center justify-start p-20 h-64">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            color={selectedBtn === 1 ? 'secondary' : 'primary'}
            onClick={() => setSelectedBtn(1)}
          >
            Running experiments
          </Button>
          <Button
            color={selectedBtn === 2 ? 'secondary' : 'primary'}
            onClick={() => setSelectedBtn(2)}
          >
            Active Deployments
          </Button>
        </ButtonGroup>
      </div>
      <div className="table-responsive">
        <EditTable 
          title="Users" 
          columns={fields} 
          editable={editable} 
          options={options} 
        />
      </div>
      <div className="flex items-center justify-start p-20 h-64">
        <Typography varient="body1">
          No runnings deployments / Experiments for the organization
        </Typography>
      </div>
    </Paper>
  );
}

export default memo(Widget3);
