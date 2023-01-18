import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Docs(props) {
  return <Box>Docs</Box>;
}

export default withReducer('docs', reducer)(Docs);
