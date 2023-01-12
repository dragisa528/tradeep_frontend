import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import BudgetSummaryTab from './tabs/BudgetSummaryTab';
import HomeTab from './tabs/HomeTab';
import TeamMembersTab from './tabs/TeamMembersTab';

const useStyles = makeStyles((theme) => ({
  content: {
    '& canvas': {
      maxHeight: '100%',
    },
  },
}));

function DashboardApp(props) {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);

  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  function handleChangeTab(event, value) {
    setTabValue(value);
  }

  if (_.isEmpty(widgets)) {
    return null;
  }

  return (
    <Box>
      <Box className="mt-12">
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
        >
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Dashboard"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Members"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Billing"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Profile"
          />
        </Tabs>
      </Box>
      <Box className={classes.content}>
        <div className="p-12 lg:ltr:pr-0 lg:rtl:pl-0">
          {tabValue === 0 && <HomeTab />}
          {tabValue === 1 && <HomeTab />}
          {tabValue === 2 && <HomeTab />}
          {tabValue === 3 && <HomeTab />}
        </div>
      </Box>
    </Box>
  );
}

export default withReducer('dashboardApp', reducer)(DashboardApp);
