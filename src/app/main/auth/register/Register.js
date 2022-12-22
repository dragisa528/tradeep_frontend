import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import JWTRegisterTab from './JWTRegisterTab';

import logo from "@assets/images/logos/fuse.svg";
import darkBackground from "@assets/images/backgrounds/dark-material-bg.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    // background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
    //   theme.palette.primary.dark,
    //   0.5
    // )} 100%)`,
    background: `url(${darkBackground})`,
    color: theme.palette.primary.contrastText,
  },
  leftSection: {},
  rightSection: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Register() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24"
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
      >
        <Card
          className={clsx(
            classes.leftSection,
            "flex flex-col w-full max-w-sm items-center justify-center shadow-0"
          )}
          square
        >
          <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div className="flex items-center mb-12">
                <img className="logo-icon w-full" src={logo} alt="logo" />
              </div>
            </motion.div>
          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">Don't have an account?</span>
              <Link className="font-normal" to="/register">
                Register
              </Link>
            </div>
            {/* <Link className="font-normal mt-8" to="/">
              Back to Dashboard
            </Link> */}
          </div>
          <JWTRegisterTab />
          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">Lost Your Password?</span>
              <Link className="font-normal" to="/forgetPassword">
                Forget Password...
              </Link>
            </div>
          </div>
        </Card>

        <div
          className={clsx(
            classes.rightSection,
            "hidden md:flex flex-1 items-center justify-center p-64"
          )}
        >
          <div className="max-w-320">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <Typography
                variant="h5"
                color="inherit"
                className="text-center font-semibold leading-tight"
              >
                GUARANTEED FUNDING
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                className="text-center font-semibold leading-tight"
              >
                AND PAYOUTS
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography variant="body1" color="inherit" className="text-center mt-32">
                {/* Keep 90% of the profits. */}
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
