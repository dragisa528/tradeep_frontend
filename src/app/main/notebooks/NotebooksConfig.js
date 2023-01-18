import { lazy } from 'react';

const NotebooksConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/notebooks',
      component: lazy(() => import('./Notebooks')),
    },
  ],
};

export default NotebooksConfig;
