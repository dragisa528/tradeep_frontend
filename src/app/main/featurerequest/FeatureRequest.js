import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function FeatureRequest(props) {
  return <Box>FeatureRequest</Box>;
}

export default withReducer('featureRequest', reducer)(FeatureRequest);
