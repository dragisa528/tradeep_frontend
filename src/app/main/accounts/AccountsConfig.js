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
    {
      path: '/mAccount',
      component: lazy(() => import('./AccountDetail')),
    },
  ],
};

export default AccountsConfig;
