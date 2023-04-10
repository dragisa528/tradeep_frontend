import { Icon, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../store/widgetsSlice';
import Widget7 from '../widgets/Widget7';
import Widget8 from '../widgets/Widget8';
import Widget9 from '../widgets/Widget9';
import Widget10 from '../widgets/Widget10';
import Widget11 from '../widgets/Widget11';

function MembersTab() {
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
      <motion.div variants={item} className="widget flex w-full p-12">
        <Widget7 widget={widgets.widget7} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <Widget8 widget={widgets.widget8} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <div className="flex w-full pt-8 pl-8">
          <Icon className="text-18">info</Icon>
          <Typography className="text-14 font-bold ml-4">Access Level</Typography>
        </div>
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-12">
        <Widget9 />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-12">
        <Widget10 />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-12">
        <Widget11 widget={widgets.widget11} />
      </motion.div>
    </motion.div>
  );
}

export default MembersTab;
