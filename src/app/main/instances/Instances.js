import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Instances(props) {
  return <Box>Instances</Box>;
}

export default withReducer('instances', reducer)(Instances);
