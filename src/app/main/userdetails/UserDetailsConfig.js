import { lazy } from 'react';

const UserDetailsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/userdetails',
      component: lazy(() => import('./UserDetails')),
    },
  ],
};

export default UserDetailsConfig;
