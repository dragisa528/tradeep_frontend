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
import withReducer from "app/store/withReducer";
import reducer from "./store";
import Table from "./table";
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
  tableSetting :{
    margin:"10px !important",
  }

}));

function Accounts(props) {
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
          <Typography variant="h6">Accounts</Typography>
          <br />
          <Typography className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod
            <span className={classes.strongWord}> bibendum </span> laoreet.
          </Typography>
        </Box>
        <Box className="right_button">
            <AddAccountModal/>
        </Box>
      </Box>

      <Box style={{ padding: "10px" }}>
        {/* container justify="center" alignItems="center" */}
        <Grid container  justify="space-around"  alignItems="center" spacing={3}>
          
          <Grid item  
              xs={12}
              sm={12}
              lg={5}>
            <Box className={classes.root}>
              <Grid container spacing={4}>
                <Grid
                  style={{
                    display: "flex",
                    padding: "10px",
                    justifyContent: "space-between",
                  }}
                  item
                  xs={12}
                >
                  <Typography variant="h6">Account Info</Typography>
                  <Button variant="contained" color="secondary">
                    Change credentials
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Account name</Typography>
                  <Box mb={1}>
                    <TextField
                      label="Account name"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box style={{ display: "flex" }}>
                    <FormControlLabel
                      control={<Switch color="primary" />}
                      label="Paper Account"
                    />

                    <FormControlLabel
                      control={<Switch color="primary" />}
                      label="Active"
                    />
                  </Box>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <Box mb={1}>
                      <TextField label="Broker" variant="outlined" fullWidth />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box mb={1}>
                      <TextField
                        label="Broker account"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    padding: "10px",
                    justifyContent: "center",
                  }}
                  item xs={12}>
                  <Button variant="contained" style={{ marginRight: "20px" }} color="primary">
                    Save
                  </Button>
                  <Button variant="contained" color="secondary">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item  
              xs={12}
              sm={12}
              lg={5}
              
              style={{margin: '40px'}}
              
              >
            <Box  mb={2}>

              <Typography variant="h6">Account Stats</Typography>
            </Box>
            <br />
            <Grid style={{padding:"4px",paddingRight:"20px"}} container spacing={6}>

              {/* First Row  */}

              <Grid style={{padding:"4px"}} item xs={12} sm={6}>
                  <Box mb={1}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Cash
                    </InputLabel>
                  </Box>
                  <FormControl fullWidth disabled>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                    />
                  </FormControl>
                </Grid>
                
                <Grid style={{padding:"4px"}} item xs={12} sm={6}>
                <Box mb={1}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Multiplier
                    </InputLabel>
                  </Box>
                  <FormControl fullWidth disabled sx={{ m: 1 }}>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                      value="1000"
                      inputProps={{ textAlign: 'center' }}
                    />
                  </FormControl>
                </Grid>

              <Grid style={{padding:"4px"}} item xs={12} sm={6}>
                <Box mb={1}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Realized PNL
                  </InputLabel>
                </Box>
                <FormControl fullWidth disabled>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                  />
                </FormControl>
              </Grid>



              {/* Second Row  */}



              <Grid style={{padding:"4px"}} item xs={12} sm={6}>
                <Box mb={1}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Buying Power
                  </InputLabel>
                </Box>
                <FormControl fullWidth disabled>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                  />
                </FormControl>
              </Grid>

              <Grid style={{padding:"4px"}} item xs={12} sm={6}>
                <Box mb={1}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Equity
                  </InputLabel>
                </Box>
                <FormControl fullWidth disabled>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                  />
                </FormControl>
              </Grid>



              {/* Third row  */}

              <Grid  style={{padding:"4px"}} item xs={12} sm={6}>
                <Box mb={1}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    initial Margin                    </InputLabel>
                </Box>
                <FormControl fullWidth disabled>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                  />
                </FormControl>
              </Grid>

              <Grid style={{padding:"4px"}} item xs={12} sm={6}>
                <Box mb={1}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Maintenance Margin
                  </InputLabel>
                </Box>
                <FormControl fullWidth disabled>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">USD</InputAdornment>}
                  />
                </FormControl>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </Box>


      <Box item  sx={{margin:"20px"}}
      // style={{maxWidth:"1500px",}}
      >
        <Table/>
      </Box>
    </>
  );
}

export default withReducer('accounts', reducer)(Accounts);
