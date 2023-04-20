import { Box } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function FeatureRequest(props) {
  return (
    <Box>
      <iframe
      src="https://tradeepai.frill.co/embed/widget/2d4c2cac-5e62-453a-98fd-01c6c7ade6db" 
      sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms allow-popups-to-escape-sandbox" 
        width="100%"
        height="850PX"
        title="Tradeepai"
      />
    </Box>
  );
}

export default withReducer('featureRequest', reducer)(FeatureRequest);
