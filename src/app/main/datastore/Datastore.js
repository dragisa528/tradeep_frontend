import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Datastore(props) {
  return <Box>Datastore</Box>;
}

export default withReducer('datastore', reducer)(Datastore);
