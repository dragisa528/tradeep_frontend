import { useState } from 'react';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../store/widgetsSlice';
import ProfileTab from './setting/ProfileTab';
import EmailTab from './setting/EmailTab';
import TimeSettingTab from './setting/TimeSettingsTab';
import AffiliateProgramTab from './setting/AffiliateProgramTab';

function SettingsTab() {
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

  const [selectedTab, setSelectedTab] = useState('profile');

  return (
    <motion.div
      className="flex flex-col"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="tab-nav-container flex justify-center">
        <div className="tab-nav flex">
          <div
            className={`tab-nav-item ${selectedTab === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedTab('profile')}
          >
            Profile
          </div>
          <div
            className={`tab-nav-item ${selectedTab === 'email' ? 'active' : ''}`}
            onClick={() => setSelectedTab('email')}
          >
            Email
          </div>
          <div
            className={`tab-nav-item ${selectedTab === 'timeSetting' ? 'active' : ''}`}
            onClick={() => setSelectedTab('timeSetting')}
          >
            Time Setting
          </div>
          <div
            className={`tab-nav-item ${selectedTab === 'affiliateProgram' ? 'active' : ''}`}
            onClick={() => setSelectedTab('affiliateProgram')}
          >
            Affiliate Program
          </div>
        </div>
      </div>
      <motion.div variants={item} className="tab-content">
        {selectedTab === 'profile' && (
          <ProfileTab widget={widgets.widgetProfile} />
        )}
        {selectedTab === 'email' && (
          <EmailTab widget={widgets.widgetEmail} />
        )}
        {selectedTab === 'timeSetting' && (
          <TimeSettingTab widget={widgets.widgetTimeSetting} />
        )}
        {selectedTab === 'affiliateProgram' && (
          <AffiliateProgramTab widget={widgets.widgetAffiliateProgram} />
        )}
      </motion.div>
    </motion.div>
  );
}

export default SettingsTab;
