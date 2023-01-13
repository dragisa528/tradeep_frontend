import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../store/widgetsSlice';
import Widget7 from '../widgets/Widget7';
import Widget8 from '../widgets/Widget8';

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
    </motion.div>
  );
}

export default MembersTab;
