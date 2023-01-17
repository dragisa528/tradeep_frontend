import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../store/widgetsSlice';
import Widget12 from '../widgets/Widget12';
import Widget13 from '../widgets/Widget13';

function BillingTab() {
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
    <motion.div
      className="flex flex-wrap justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="widget flex w-full p-12 md:w-1/2">
        <Widget12 widget={widgets.widget12} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <Widget13 widget={widgets.widget13} />
      </motion.div>
    </motion.div>
  );
}

export default BillingTab;
