import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  InputLabel, FormControl, OutlinedInput,
  Switch,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton,
  FormControlLabel,
} from "@material-ui/core";
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import withReducer from "app/store/withReducer";
import reducer from "./store";

import Rating from '@mui/material/Rating';



// or
// import { Rating } from '@mui/material';

import React from "react";
import { Edit as EditIcon, Visibility as VisibilityIcon } from "@material-ui/icons";
import AddAccountModal from "./modalshow"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  heading: {
    display: "block",
    alignItems: "center",
  },
  strongWord: {
    fontWeight: "bold",
  },
  right_button: {
    float: "right",
  },
  conrow: {
    display: "flex",
    justifyContent: "space-between !important",
  },
  tableSetting: {
    margin: "10px !important",
  }

}));

function Accounts(props) {
  const classes = useStyles();
  // Sample data for the table
  const tableData = [{ name: "John Doe", broker: "TD Ameritrade", cash: "$5000", }];

  // Sample data for the list
  const listData = [{ image: "https://via.placeholder.com/150", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", }, { image: "https://via.placeholder.com/150", rating: 3, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", }, { image: "https://via.placeholder.com/150", rating: 5, text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", },];

  return (
    <>
      <Box
        className="conrow"
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >

        <Box style={{
          width: "100%", display: "flex",
          padding: "10px",
          justifyContent: "space-between"
        }}>

          <Box className={classes.heading}>
            <Typography variant="h6">Accounts</Typography>
            <br />
            <Typography className="">
              An <span className={classes.strongWord}> account object </span> holds your destination broker's credentials.
              <br />
              <p>This allows you to route orders to the desired broker.</p>
            </Typography>
          </Box>
          <Box className="right_button">
            <AddAccountModal />
          </Box>
        </Box>



        <Box>

          <Grid container spacing={2}>
            <Grid item xs={12}
              sm={12}
              lg={8}>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Broker</TableCell>
                      <TableCell>Cash</TableCell>
                      <TableCell>---</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.broker}</TableCell>
                        <TableCell>{row.cash}</TableCell>
                        <TableCell>
                        <Link to="/mAccount">
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        </Link>
                        <Link to="/mAccount">
                          <IconButton>
                            <VisibilityIcon />
                          </IconButton>
                        </Link>
                      </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid 
  style={{margin:"20px"}}
  item xs={12}
  sm={12}
  lg={3}
>
  {/* Column 2 content */}
  <Box boxShadow={3} p={2} bgcolor="background.paper">
    <Grid container spacing={2} display="flex" alignItems="center" flexDirection="column" >
      {listData.map((item) => (
        <Box boxShadow={1} p={2} bgcolor="background.paper">
          <Grid item xs={12} md={12} lg={12} display="flex" alignItems="center">
            <Box display="flex" display="flex" alignItems="center" justifyContent="space-between">
              <Box mr={2}>
                <img src="https://www.cnet.com/a/img/resize/e797cd7dd3d705435319ad5bfb405c0c60eae5ad/hub/2022/04/05/653e0d19-f298-49f3-9bb0-41ad1464e1cd/gettyimages-1199472028.jpg?auto=webp&fit=crop&height=675&width=1200" alt={item.name} width={80} />
              </Box>
              <Box>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle1">
                  {item.description}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Rating name="read-only" value={item.rating} readOnly />
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" color="textSecondary">
                    OverAll
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      ))}
    </Grid>
  </Box>
</Grid>

          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default withReducer('accounts', reducer)(Accounts);
