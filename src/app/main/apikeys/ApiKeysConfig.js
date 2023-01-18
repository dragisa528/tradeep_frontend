import { lazy } from 'react';

const ApiKeysConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apikeys',
      component: lazy(() => import('./ApiKeys')),
    },
  ],
};

export default ApiKeysConfig;
