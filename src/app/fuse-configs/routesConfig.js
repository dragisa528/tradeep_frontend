import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import AuthConfig from 'app/main/auth/AuthConfig';
import DashboardAppConfig from 'app/main/dashboard/DashboardAppConfig';
import ModelConfig from 'app/main/model/ModelConfig';
import DatastoreConfig from 'app/main/datastore/DatastoreConfig';
import AccountsConfig from 'app/main/accounts/AccountsConfig';
import InstancesConfig from 'app/main/instances/InstancesConfig';
import ApiKeysConfig from 'app/main/apikeys/ApiKeysConfig';
import CommunityConfig from 'app/main/community/CommunityConfig';
import DocsConfig from 'app/main/docs/DocsConfig';
import AffiliateProgrameConfig from 'app/main/affiliatePrograme/AffiliateProgrameConfig';
import FeatureRequestConfig from 'app/main/featurerequest/FeatureRequestConfig';
import HelpConfig from 'app/main/help/HelpConfig';
import WhatnewConfig from 'app/main/whatnew/WhatnewConfig';
import StatusConfig from 'app/main/status/StatusConfig';
import NotebooksConfig from 'app/main/notebooks/NotebooksConfig';

const routeConfigs = [
  DashboardAppConfig,
  ModelConfig,
  DatastoreConfig,
  AccountsConfig,
  InstancesConfig,
  ApiKeysConfig,
  CommunityConfig,
  DocsConfig,
  AffiliateProgrameConfig,
  FeatureRequestConfig,
  HelpConfig,
  WhatnewConfig,
  StatusConfig,
  NotebooksConfig,
  ...AuthConfig,
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/dashboard" />,
  },
  {
    path: '/loading',
    exact: true,
    component: () => <FuseLoading />,
  },
  {
    path: '/404',
    component: () => <Error404Page />,
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

export default routes;
