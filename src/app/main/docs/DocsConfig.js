import { lazy } from 'react';

const DocsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/docs',
      component: lazy(() => import('./Docs')),
    },
  ],
};

export default DocsConfig;
