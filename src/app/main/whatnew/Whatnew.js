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

import Timeline from '@mui/lab/Timeline';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Paper from '@material-ui/core/Paper';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),


  },

  borderbox: {
    boxShadow: "2px 2px 10px grey",
    maxWidth: "400px",
    margin: "15px"
  },
  image: {
    width: 80,
    height: 80,

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
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


function TimelineItemComponent(props) {
  const classes = useStyles();
  const { title, subtitle, content, logo } = props;

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Avatar alt={title} src={logo} />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
          <Typography>{content}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}


function Whatnew(props) {
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

        <Box>
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
   
        <Box>
        <Timeline align="alternate">
          <TimelineItemComponent
            title="Timeline Item 1"
            subtitle="Subtitle"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            logo="https://toppng.com/uploads/preview/linkedin-logo-transparent-116602552215dpnc1i8cu.png"
          />
          <TimelineItemComponent
            title="Timeline Item 2"
            subtitle="Subtitle"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            logo="https://toppng.com/uploads/preview/linkedin-logo-transparent-116602552215dpnc1i8cu.png"
          />
          <TimelineItemComponent
            title="Timeline Item 3"
            subtitle="Subtitle"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            logo="https://toppng.com/uploads/preview/linkedin-logo-transparent-116602552215dpnc1i8cu.png"
          />
        </Timeline>
        </Box>

      </Box>
    </>
  )
}




export default withReducer('whatnew', reducer)(Whatnew);
