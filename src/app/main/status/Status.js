import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Status(props) {
  return <Box>Status</Box>;
}

export default withReducer('status', reducer)(Status);
