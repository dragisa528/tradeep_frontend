import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Accounts(props) {
  return <Box>Accounts</Box>;
}

export default withReducer('accounts', reducer)(Accounts);
