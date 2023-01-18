import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function AffiliatePrograme(props) {
  return <Box>AffiliatePrograme</Box>;
}

export default withReducer('affiliatePrograme', reducer)(AffiliatePrograme);
