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
      component: lazy(() => import('./DashboardApp')),
    },
  ],
};

export default ProjectDashboardAppConfig;
