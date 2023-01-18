import { lazy } from 'react';

const AffiliateProgrameConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/affiliateprogram',
      component: lazy(() => import('./AffiliatePrograme')),
    },
  ],
};

export default AffiliateProgrameConfig;
