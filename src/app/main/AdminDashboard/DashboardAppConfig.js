import { lazy } from 'react';

const DashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/AdminDashboard',
      component: lazy(() => import('./DashboardApp')),
    },
  ],
};

export default DashboardAppConfig;
