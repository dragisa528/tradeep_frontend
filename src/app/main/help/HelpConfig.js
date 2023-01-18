import { lazy } from 'react';

const HelpConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/help',
      component: lazy(() => import('./Help')),
    },
  ],
};

export default HelpConfig;
