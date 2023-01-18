import { useState } from 'react';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../store/widgetsSlice';
import Widget12 from '../widgets/Widget12';
import Widget13 from '../widgets/Widget13';
import Widget14 from '../widgets/Widget14';

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

  const [userMenu, setUserMenu] = useState(null);
  const [pageState, setPageState] = useState(0);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <motion.div
      className="flex flex-wrap justify-left"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {pageState === 0 && (
        <motion.div variants={item} className="widget flex w-full p-12">
          <Widget12
            widget={widgets.widget12}
            userMenu={userMenu}
            userMenuClick={userMenuClick}
            userMenuClose={userMenuClose}
            setPageState={setPageState}
          />
        </motion.div>
      )}
      {pageState === 1 && (
        <motion.div variants={item} className="widget flex w-full p-12">
          <Widget13 widget={widgets.widget13} setPageState={setPageState} />
        </motion.div>
      )}
      {pageState === 2 && (
        <motion.div variants={item} className="widget flex w-full p-12">
          <Widget14 widget={widgets.widget14} setPageState={setPageState} />
        </motion.div>
      )}
    </motion.div>
  );
}

export default BillingTab;
