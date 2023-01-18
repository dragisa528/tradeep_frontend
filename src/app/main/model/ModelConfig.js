import { lazy } from 'react';

const ModelConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/model',
      component: lazy(() => import('./Model')),
    },
  ],
};

export default ModelConfig;
