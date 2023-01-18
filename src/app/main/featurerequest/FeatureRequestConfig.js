import { lazy } from 'react';

const FeatureRequestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/featurerequest',
      component: lazy(() => import('./FeatureRequest')),
    },
  ],
};

export default FeatureRequestConfig;
