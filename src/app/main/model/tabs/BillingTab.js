import { useState } from 'react';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function BillingTab() {
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
      Create Model
    </motion.div>
  );
}

export default BillingTab;
