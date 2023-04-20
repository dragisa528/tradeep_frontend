import { useState, memo } from 'react';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

function Widget3(props) {
  const [selectedBtn, setSelectedBtn] = useState(-1);

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
        <Table className="w-full min-w-full">
          <TableHead>
            <TableRow>
              {props.widget.table.columns.map((column) => (
                <TableCell key={column.id}>
                  <Typography color="textSecondary" className="font-semibold whitespace-nowrap">
                    {column.title}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.widget.table.rows.map((row) => (
              <TableRow key={row.id} className="h-64">
                {row.cells.map((cell) => {
                  switch (cell.id) {
                    case 'icon': {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Typography
                            className={clsx(cell.classes, 'flex items-center font-medium')}
                          >
                            <IconButton color="inherit">
                              <Icon className="text-14">{cell.value}</Icon>
                            </IconButton>
                          </Typography>
                        </TableCell>
                      );
                    }
                    default: {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Typography className={cell.classes}>{cell.value}</Typography>
                        </TableCell>
                      );
                    }
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
