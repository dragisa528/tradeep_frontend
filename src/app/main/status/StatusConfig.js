import { lazy } from 'react';

const StatusConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/status',
      component: lazy(() => import('./Status')),
    },
  ],
};

export default StatusConfig;
