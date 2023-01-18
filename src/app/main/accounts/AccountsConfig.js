import { lazy } from 'react';

const AccountsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/accounts',
      component: lazy(() => import('./Accounts')),
    },
  ],
};

export default AccountsConfig;
