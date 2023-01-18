import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { selectWidgets } from '../store/widgetsSlice';
import Widget1 from '../widgets/Widget1';
import Widget2 from '../widgets/Widget2';
import Widget3 from '../widgets/Widget3';
import Widget40 from '../widgets/Widget4_0';
import Widget41 from '../widgets/Widget4_1';
import Widget42 from '../widgets/Widget4_2';
import Widget43 from '../widgets/Widget4_3';

function DashboardTab() {
  const widgets = useSelector(selectWidgets);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="widget flex w-full md:w-1/2 p-12">
        <Widget1 widget={widgets.widget1} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full md:w-1/2 p-12">
        <Widget2 data={widgets.widget2} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <Widget3 widget={widgets.widget3} />
      </motion.div>
      <div className="widget flex flex-wrap w-full p-12">
        <motion.div variants={item} className="widget flex w-full p-12">
          <Typography variant="h5">Status</Typography>
        </motion.div>
        <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
          <Widget40 />
        </motion.div>
        <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
          <Widget41 />
        </motion.div>
        <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
          <Widget42 />
        </motion.div>
        <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
          <Widget43 />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DashboardTab;
