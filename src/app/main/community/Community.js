import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Community(props) {
  return <Box>Community</Box>;
}

export default withReducer('community', reducer)(Community);
