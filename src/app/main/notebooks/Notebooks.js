import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  InputLabel, FormControl, OutlinedInput,
  Switch,
  Chip,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton,
  FormControlLabel,
  Avatar
} from "@material-ui/core";
import withReducer from 'app/store/withReducer';
import reducer from './store';
import SearchIcon from '@material-ui/icons/Search';


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    // borderBottom: `1px solid ${theme.palette.grey[50]}`,
    // add shadow here 
    // boxShadow: "2px 2px 10px grey",

  },

  borderbox: {
    boxShadow: "2px 2px 10px grey",
  },
  image: {
    width: 150,
    height: 150,
    
    marginRight: theme.spacing(2),
  },
  imageicon: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2),
  },
  creatorName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  programmingIcon: {
    marginLeft: 'auto',
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

function ListItem(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.borderbox}>
        <Box className={classes.root}>
          <Box>
            <Avatar style={{borderRadius:"0px"}} src={props.image} className={classes.image} />
            <Typography variant="subtitle1" className={classes.creatorName}>
              {props.creator}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold" mb={1}>
                {props.title}
              </Box>
              {props.description}
            </Typography>
          </Box>
          <Box className={classes.programmingIcon}>
            {props.programmingLanguage === 'python' && <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" className={classes.imageicon} />}
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" style={{ margin: 10 }}>
            <Typography variant="body1"> + Luanch Notebook</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

function Notebooks(props) {
  const classes = useStyles();

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

        <Box className={classes.heading}>
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="h6">Open Source Trading Notebooks</Typography>

            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { borderRadius: 25, marginTop: 10 }
              }}
            />

          </Box>
          <br />
          <Typography className="">
            <p>This is a gallery of Trading Notebooks built from across the github community. </p>
            <p>If you’d like to add your book to this list, simply add an entry to this gallery.</p>
            <p>yml file and open a Pull Request to add it.  (we will actualliy fill the a form on discord and this will create the PR request)</p>
          </Typography>
        </Box>


        <Box>
          <div style={{ display: "flex", marginLeft: 20, marginTop: 10 }}>
            <Chip label="Crypto Currency" style={{ margin: "5px" }} />
            <Chip label="Stocks" style={{ margin: "5px" }} />
            <Chip label="Stocks Portfolio" style={{ margin: "5px" }} />
            <Chip label="Forex" style={{ margin: "5px" }} />
            <Chip label="Futures" style={{ margin: "5px" }} />
          </div>

        </Box>


        <Box style={{ marginTop: 20 }}>

          <ListItem
            image="https://www.internetandtechnologylaw.com/files/2019/06/iStock-872962368-chat-bots-883x1000.jpg"
            creator="Creator Name"
            title="TensorTrade"
            description="An open source reinforcement learning framework for training, evaluating, and deploying robust trading agents."
            programmingLanguage="python"
          />
          <br />

          <ListItem
            image="https://avatars.githubusercontent.com/u/68813910?v=4&s=400"
            creator="Creator: AI4Finance"
            title="FinRL Meta"
            description="FinRL Meta Is an open 
            source Deep learning framework based on pytorch implementaion"
            programmingLanguage="python"
          />

        </Box>



      </Box>
    </>
  )
}

export default withReducer('Notebooks', reducer)(Notebooks);
