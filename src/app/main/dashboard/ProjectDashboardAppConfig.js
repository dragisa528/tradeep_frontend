import { lazy } from 'react';

const ProjectDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/dashboard',
      component: lazy(() => import('./ProjectDashboardApp')),
    },
  ],
};

export default ProjectDashboardAppConfig;
