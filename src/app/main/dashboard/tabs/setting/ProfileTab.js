import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormHelperText,
  InputLabel, FormControl, OutlinedInput,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from "@material-ui/core/styles";

import EditIcon from "@material-ui/icons/Edit";
import ResetIcon from "@material-ui/icons/Restore";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Divider from '@material-ui/core/Divider';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import PhoneInput from '../setting/widgets/phonenumber'
const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(1),
    maxWidth: 600
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginTop: theme.spacing(2),
  },
  userProfile: {
    textAlign: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(20),
    margin: "0 auto",
    borderRadius: "10px"

  },
  input: {
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    marginRight: theme.spacing(1),
  },
  footer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
  footerButton: {
    marginLeft: theme.spacing(1),
  },
  EditIcon: {
    cursor: "pointer",
  }
}));

const ProfileTab = () => {
  const classes = useStyles();

  return (
    <>
      
        <form className={classes.root}>
          <Grid container style={{display:"flex",flexDirection:"row"}} >
            {/* First section - user profile */}
            <Grid item  style={{ marginTop: "10%" }} className={classes.userProfile}>
              <img
                src="https://via.placeholder.com/150x150"
                alt="User avatar"
                className={classes.avatar}
              />
              <Typography variant="h6">Username</Typography>
            </Grid>

            {/* Second section - input fields with edit pencils */}
            <Grid item >
           
                <FormControl variant="outlined" style={{margin:"4px"}}>
                  <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-First Name"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle First Name visibility"
                          edge="end"
                        ><EditIcon
                            onClick={() => { alert("aa"); }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="First Name"
                  />
                </FormControl>
                     
                <FormControl sx={{ m: 1, width: '25ch' }} style={{margin:"4px"}}  variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-Last-Name"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle Last-Name visibility"
                          edge="end"
                        >

                          <EditIcon
                            onClick={() => { alert("aa"); }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Last-Name"
                  />
                </FormControl>



                <FormControl sx={{ m: 1, width: '25ch' }} style={{margin:"4px"}}  variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-Email"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle Email visibility"
                          edge="end"
                        >

                          <EditIcon
                            onClick={() => { alert("aa"); }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Email"
                  />
                </FormControl>



                <FormControl sx={{ m: 1, width: '25ch' }} style={{margin:"4px"}}  variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Trade Company</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-Trade-Company"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle Trade Company visibility"
                          edge="end"
                        >

                          <EditIcon
                            onClick={() => { alert("aa"); }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Trade Company"
                  />
                </FormControl>



                    
                    <PhoneInput/>

                <Grid item style={{marginTop:"20px"}}>
              <Button variant="contained" className={classes.button}>
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Verify
              </Button>
              
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Save
              </Button>
            </Grid>
            
            </Grid>
          
          </Grid>
        </form>
      
    </>
  );
};

export default ProfileTab;
