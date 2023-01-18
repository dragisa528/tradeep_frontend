import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Help(props) {
  return <Box>Help</Box>;
}

export default withReducer('help', reducer)(Help);
