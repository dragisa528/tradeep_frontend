import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Whatnew(props) {
  return <Box>Whatnew</Box>;
}

export default withReducer('whatnew', reducer)(Whatnew);
