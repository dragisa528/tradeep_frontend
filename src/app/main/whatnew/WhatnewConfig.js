import { lazy } from 'react';

const WhatnewConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/whatnew',
      component: lazy(() => import('./Whatnew')),
    },
  ],
};

export default WhatnewConfig;
