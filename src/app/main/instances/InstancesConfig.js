import { lazy } from 'react';

const InstancesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/instances',
      component: lazy(() => import('./Instances')),
    },
  ],
};

export default InstancesConfig;
