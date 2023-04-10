import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { memo } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from '@lodash';

function Widget2(props) {
  const theme = useTheme();
  const data = _.merge({}, props.data);

  _.setWith(data, 'options.colors', [theme.palette.secondary.main]);

  return (
    <Card className="w-full rounded-20 shadow flex flex-wrap p-20">
     
      <Box
        sx={{
          width: { xs: '100%', sm: '500px', md: '300px', lg: '500px' },
          height: { xs: '260px' },
        }}
      >
        <ReactApexChart
          options={data.options}
          series={data.series}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </Box>
    </Card>
  );
}

export default memo(Widget2);
