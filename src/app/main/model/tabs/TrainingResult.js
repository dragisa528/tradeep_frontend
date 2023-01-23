import { Icon, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function MembersTab() {
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
      Oputuna Dashboard
    </motion.div>
  );
}

export default MembersTab;
