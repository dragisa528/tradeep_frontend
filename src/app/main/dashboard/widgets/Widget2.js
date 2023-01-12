import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from '@lodash';

function Widget2(props) {
  const theme = useTheme();
  const data = _.merge({}, props.data);

  _.setWith(data, 'options.colors', [theme.palette.secondary.main]);

  return (
    <Card className="w-full rounded-20 shadow flex">
      <div className="p-20 pb-0 w-full sm:w-1/4 flex flex-col justify-start">
        <div className="mb-8">
          <div className="flex">
            <Typography className="h3 font-bold">Profits</Typography>
            <Typography className="h5 font-medium ml-6 text-gray-600">This Month</Typography>
          </div>
          <div className="flex">
            <Typography className="h2 font-bold">$2443.54</Typography>
            {data.impressions.ofTarget > 0 && (
              <Icon className="text-green text-20">trending_up</Icon>
            )}
            {data.impressions.ofTarget < 0 && (
              <Icon className="text-red text-20">trending_down</Icon>
            )}
          </div>
          <div className="text-left p-3 felx flex-col-reverse">
            <Link className="text-14 text-green-200 font-200" to="/#">
              View Details
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex">
            <Typography className="h3 font-bold">Profits</Typography>
            <Typography className="h5 font-medium ml-6 text-gray-600">Last Month</Typography>
          </div>
          <div className="flex">
            <Typography className="h2 font-bold">$2132.23</Typography>
            {data.impressions.ofTarget > 0 && (
              <Icon className="text-green text-20">trending_up</Icon>
            )}
            {data.impressions.ofTarget < 0 && (
              <Icon className="text-red text-20">trending_down</Icon>
            )}
          </div>
        </div>
        <div>
          <div className="flex flex-row flex-wrap items-center mt-12">
            <div className="min-w-32 min-h-6 bg-red rounded-full" />
            <Typography className="ml-6 text-12 font-semibold leading-none tracking-tighter">
              Drawdown
            </Typography>
          </div>
          <div className="flex flex-row flex-wrap items-center mt-12">
            <div className="min-w-32 min-h-6 bg-green rounded-full" />
            <Typography className="ml-6 text-12 font-semibold leading-none tracking-tighter">
              Account Equity
            </Typography>
          </div>
        </div>

      </div>
      <div className="h-320 w-100-p w-full sm:w-3/4">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>
    </Card>
  );
}

export default memo(Widget2);
