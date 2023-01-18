import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function ApiKeys(props) {
  return <Box>ApiKeys</Box>;
}

export default withReducer('apiKeys', reducer)(ApiKeys);
