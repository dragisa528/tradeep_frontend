import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Model(props) {
  return <Box>Model</Box>;
}

export default withReducer('model', reducer)(Model);
