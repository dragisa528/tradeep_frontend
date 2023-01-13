import { memo } from 'react';
import { Button, IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

function Widget7(props) {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden">
      <div className="table-responsive">
        <div className="flex w-full pt-8 pl-8">
          <Icon className="text-18">person_add</Icon>
          <Typography className="text-14 font-bold ml-4">Invites</Typography>
        </div>
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
                    case 'role': {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Button>
                            <Typography className={cell.classes}>{cell.value}</Typography>
                          </Button>
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
    </Paper>
  );
}

export default memo(Widget7);
