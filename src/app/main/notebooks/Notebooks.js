import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function Notebooks(props) {
  return <Box>Notebooks</Box>;
}

export default withReducer('Notebooks', reducer)(Notebooks);
