import { lazy } from 'react';

const DatastoreConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/datastore',
      component: lazy(() => import('./Datastore')),
    },
  ],
};

export default DatastoreConfig;
