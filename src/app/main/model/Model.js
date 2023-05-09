import { Box, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import _ from '@lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import BackTest from './tabs/BackTest';
import CreateModel from './tabs/CreateModel';
import TrainingResult from './tabs/TrainingResult';
import { openNewModelDialog } from './store/modelSlice';
import ModelDialog from './ModelDialog';
import reducer from './store';

const useStyles = makeStyles((theme) => ({
  content: {
    '& canvas': {
      maxHeight: '100%',
    },
  },
}));

function Model(props) {
  const dispatch = useDispatch();

  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);

  function handleChangeTab(event, value) {
    setTabValue(value);
  }

  return (
    <Box>
      <Box className="flex justify-between">
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="off"
          className="w-full px-24 -mx-4 min-h-40"
          classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
          TabIndicatorProps={{
            children: <Divider className="w-full h-full rounded-full opacity-50" />,
          }}
          style={{backgroundColor: '#414141', paddingTop: '1.2rem'}}
        >


          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 modelNavbarBtn"
            disableRipple
            label="Builder"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 modelNavbarBtn"
            disableRipple
            label="Features"
            // icon={<i className="fas fa-rocket"></i>}
          />
           <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 modelNavbarBtn"
            disableRipple
            label="Training Result"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 modelNavbarBtn"
            disableRipple
            label="Backtest"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 modelNavbarBtn"
            disableRipple
            label="Template"
          />
        </Tabs>
        {/* <Button
          color="secondary"
          variant="contained"
          className="w-160 mr-12"
          onClick={(ev) => dispatch(openNewModelDialog())}
        >
          +Create Model
        </Button> */}
      </Box>
      <Box className={classes.content}>
        <div className="p-12 lg:ltr:pr-0 lg:rtl:pl-0" style={{backgroundColor: "#414141"}}>
          {tabValue === 0 && <CreateModel />}
          {tabValue === 2 && <TrainingResult />}
          {tabValue === 1 && <BackTest />}
        </div>
      </Box>
      {/* <ModelDialog /> */}
    </Box>
  );
}

export default withReducer('modelsApp', reducer)(Model);
