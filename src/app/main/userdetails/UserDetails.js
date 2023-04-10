import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  InputLabel, FormControl, OutlinedInput,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import withReducer from 'app/store/withReducer';
import reducer from './store';
import AddAccountModal from "./modalshow"
import TableData from "./tabledata"

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

function UserDetails(props) {
  const classes = useStyles();

  return (
    <>
     <Box
        className="conrow"
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
        }}
      >
        <Box className={classes.heading}>
          <Typography variant="h6">Api Keys</Typography>
          <br />
          
        </Box>
        <Box className="right_button">
          <AddAccountModal />
        </Box>
      </Box>


      <Box>
        <TableData/>
      </Box>
    


    </>
  )
}
export default withReducer('apikey', reducer)(UserDetails);

