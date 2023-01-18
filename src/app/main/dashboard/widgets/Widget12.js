import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Icon, ListItemIcon, ListItemText, MenuItem, Popover } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 600,
    borderRadius: '30px',
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  badge: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
  },
  body: {
    height: 'calc(100% - 260px)',
  },
}));

function Widget12(props) {
  const classes = useStyles();
  const { userMenu, userMenuClose, userMenuClick, setPageState } = props;
  const [count, setCount] = useState(0);
  const [countFree, setCountFree] = useState(0);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex justify-between">
      <div className="w-full md:w-1/2">
        <div className={clsx(classes.header, 'flex flex-col')}>
          <div className={clsx(classes.body, 'flex flex-wrap px-12 pt-8 w-full')}>
            <div className="text-left py-12 px-6 w-1/2 sm:w-1/3 flex justify-center  flex-col">
              <Typography className="text-18 font-semibold leading-none tracking-tighter">
                Compute Time
              </Typography>
              <div className="text-left p-3 flex">
                <Typography className="text-28 font-900">3</Typography>
                <div className="text-left p-3">
                  <Typography className="text-12 font-normal">Hours</Typography>
                  <Typography className="text-10 font-200 ">Available</Typography>
                </div>
              </div>
            </div>
            <div className="text-left py-12 px-6 w-1/2 sm:w-1/3  flex justify-center  flex-col">
              <Typography className="text-18 font-semibold leading-none tracking-tighter">
                Predictions Limit
              </Typography>
              <div className="text-left p-3 flex">
                <Typography className="text-28 font-900">0</Typography>
                <div className="text-left p-3">
                  <Typography className="text-12 font-normal">/500</Typography>
                  <Typography className="text-10 font-200 ">Used</Typography>
                </div>
              </div>
            </div>
            <div className="text-left py-12 px-6 w-1/2 sm:w-1/3 flex justify-center  flex-col">
              <Typography className="text-18 font-semibold leading-none tracking-tighter">
                Storage
              </Typography>
              <div className="text-left p-3 flex">
                <Typography className="text-28 font-900">20</Typography>
                <div className="text-left p-3">
                  <Typography className="text-12 font-normal">GB</Typography>
                  <Typography className="text-10 font-200 ">Available</Typography>
                </div>
              </div>
            </div>
            <div className="text-left py-12 px-6 w-1/2 sm:w-1/3 flex justify-center  flex-col">
              <Typography className="text-18 font-semibold leading-none tracking-tighter">
                #of Members
              </Typography>
              <div className="text-left p-3 flex">
                <Typography className="text-28 font-900">1</Typography>
                <div className="text-left p-3  flex items-center">
                  <Typography className="text-10 font-200">members</Typography>
                </div>
              </div>
            </div>
            <div className="text-left py-12 px-6 w-1/2 sm:w-1/3 flex justify-center  flex-col">
              <Typography className="text-18 font-semibold leading-none tracking-tighter">
                Active Deployments
              </Typography>
              <div className="text-left p-3 flex">
                <Typography className="text-28 font-900">1</Typography>
                <div className="text-left p-3  flex items-center">
                  <Typography className="text-10 font-200">deployments</Typography>
                </div>
              </div>
            </div>
            <div className="text-left py-12 px-6 w-1/2 sm:w-1/3 flex justify-center  flex-col">
              <Typography className="text-18 font-semibold leading-none tracking-tighter">
                Concurrent experiments
              </Typography>
              <div className="text-left p-3 flex">
                <Typography className="text-28 font-900">1</Typography>
                <div className="text-left p-3  flex items-center">
                  <Typography className="text-10 font-200">members</Typography>
                </div>
              </div>
            </div>
          </div>
          <Typography className="text-14 font-200 px-24">
            Your compute time and storage quotas will be renewed each calendar month according to your
            plan. Next renewal occurs on 2021-11-01.
          </Typography>
        </div>

        <div className="-mt-192">
          <div className="w-full max-w-2xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center flex-wrap"
            >
              <motion.div variants={item} className="w-full max-w-320 sm:w-1/2 p-12">
                <Card className="relative rounded-16">
                  <div className="pt-48 pb-24 text-center">
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      className="text-20 font-semibold"
                    >
                      Current Plan(Free)
                    </Typography>
                  </div>

                  <CardContent className="text-center p-0">
                    <div className="flex flex-col">
                      <div className="flex justify-center mb-8">
                        <Typography variant="h5" color="textSecondary" className="font-semibold">
                          $
                        </Typography>
                        <Typography className="text-56 mx-4 tracking-tight font-semibold leading-none">
                          0
                        </Typography>
                      </div>
                      <Typography color="textSecondary" className="font-medium text-16">
                        PER MONTH
                      </Typography>
                      <Typography color="textSecondary" className="font-medium p-16 text-14">
                        For your hobby projects or validating the platform
                      </Typography>
                      <div className="flex justify-center pb-4">
                        <Button
                          onClick={() => setCountFree(countFree + 1)}
                          variant="outlined"
                          className="w-128"
                        >
                          Get Started {`  ${countFree}`}
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col p-32">
                      <Typography variant="subtitle1" className="mb-8">
                        <span>For Demo Trading Use</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">1</span>
                        <span>User</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">1</span>
                        <span>Trading Hours/Month</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">500</span>
                        <span>Predictions/Month</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">
                          Train I Experiment/Model At The Same Time
                        </span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">1</span>
                        <span>Live Deployment</span>
                      </Typography>
                    </div>
                    <div className="flex flex-col p-16">
                      <Typography variant="h5" className="mb-8">
                        <span>Features</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">3 Assets:</span>
                        <span>Google, BITCOIN, AAPL</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span>Min Bar Interval:</span>
                        <span className="font-semibold mx-4">1H</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">3</span>
                        <span>Feature</span>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item} className="w-full max-w-320 sm:w-1/2 p-16">
                <Card className="relative rounded-16" raised>
                  <div className="absolute top-0 inset-x-0 flex justify-center">
                    <div className={clsx(classes.badge, 'py-4 px-8 rounded-b-4')}>
                      <Typography className="text-12 font-semibold tracking-tight" color="inherit">
                        BEST OPTION
                      </Typography>
                    </div>
                  </div>

                  <div className="pt-48 pb-24 text-center">
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      className="text-20 font-semibold"
                    >
                      Alpha Stage(Starter)
                    </Typography>
                  </div>

                  <CardContent className="text-center p-0">
                    <div className="flex flex-col">
                      <div className="flex justify-center mb-8">
                        <Typography variant="h5" color="textSecondary" className="font-semibold">
                          $
                        </Typography>
                        <Typography className="text-56 mx-4 tracking-tight font-semibold leading-none">
                          29
                        </Typography>
                      </div>
                      <Typography color="textSecondary" className="font-medium text-16">
                        PER MONTH
                      </Typography>
                      <Typography color="textSecondary" className="font-medium p-16 text-14">
                        For your Trading projects or validating the platform
                      </Typography>
                      <div className="flex justify-center ">
                        <Button
                          onClick={() => setCount(count + 1)}
                          variant="contained"
                          color="secondary"
                          className="w-128"
                        >
                          Get Started {`  ${count}`}
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col p-32">
                      <Typography variant="subtitle1" className="mb-8">
                        <span>Up to $10000 Live Account</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">1</span>
                        <span>User</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">Ultimate</span>
                        <span>Trading Hours/Month</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">10000</span>
                        <span>Predictions/Month</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">
                          Train unlimted as pay as you go experiment/model at the same time
                        </span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="font-semibold mx-4">1</span>
                        <span>Live Deployment</span>
                      </Typography>
                    </div>
                    <div className="flex flex-col p-16">
                      <Typography variant="h5" className="mb-8">
                        <span>Features</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span>Almost Any Asset</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span className="">Unlimited Features</span>
                      </Typography>
                      <Typography variant="subtitle1" className="mb-8">
                        <span>Min Bar Interval</span>
                        <span className="font-semibold mx-4">1M</span>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Button
        color="secondary"
        variant="contained"
        className="max-h-40 min-w-40 px-16 py-6"
        onClick={userMenuClick}
      >
        <Typography component="span" className="font-semibold flex">
          View
        </Typography>
      </Button>
      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        <MenuItem onClick={() => setPageState(1)} role="button">
          <ListItemIcon className="min-w-40">
            <Icon>payment</Icon>
          </ListItemIcon>
          <ListItemText primary="Usage" />
        </MenuItem>
        <MenuItem onClick={() => setPageState(2)} role="button">
          <ListItemIcon className="min-w-40">
            <Icon>receipt</Icon>
          </ListItemIcon>
          <ListItemText primary="History" />
        </MenuItem>
      </Popover>
    </div>
  );
}

export default Widget12;
