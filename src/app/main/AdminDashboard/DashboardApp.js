import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import DashboardTab from './tabs/DashboardTab';



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

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);



  if (_.isEmpty(widgets)) {
    return null;
  }

  return (
    <Box>
   
      <Box className={classes.content}>
        <div className="p-12 lg:ltr:pr-0 lg:rtl:pl-0">
        <DashboardTab />
         
        </div>
      </Box>
    </Box>
  );
}

export default withReducer('dashboardApp', reducer)(DashboardApp);
