import { useState } from 'react';
import { Tab, Tabs, Box,Button } from '@material-ui/core';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../store/widgetsSlice';
import ProfileTab from './setting/ProfileTab';
import EmailTab from './setting/EmailTab';
import TimeSettingTab from './setting/TimeSettingsTab';
import AffiliateProgramTab from './setting/AffiliateProgramTab';
import React  from 'react';


function SettingsTab() {

  const [value, setValue] = React.useState('profile');  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      animate="show"
    >
      <Tabs value={value} onChange={handleChange}>
      <Tab label="Profile" value="profile" />
      <Tab label="Email & Notification" value="email" />
      <Tab label="Time Setting" value="timeSetting" />
      <Tab label="Affiliate Program" value="affiliateProgram" />
    </Tabs>
    <Box p={3}>
      {value === 'profile' && <ProfileTab/>}
      {value === 'email' && <EmailTab />}
      {value === 'timeSetting' && <TimeSettingTab />}
      {value === 'affiliateProgram' && <AffiliateProgramTab />}
    </Box>
    </motion.div>
  );
}

export default SettingsTab;
