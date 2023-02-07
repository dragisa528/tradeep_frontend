import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function ApiKeys(props) {
  return <Box>ApiKeys</Box>;
}

export default withReducer('apiKeys', reducer)(ApiKeys);

//https://github.com/TheSnowGuru/Deeptrade_frontend-old/blob/b1aff29d703771861c3ecea61d4d37a4c4a750c3/src/views/api-keys/components/main.js

