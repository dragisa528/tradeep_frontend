import { lazy } from 'react';

const CommunityConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/community',
      component: lazy(() => import('./Community')),
    },
  ],
};

export default CommunityConfig;
