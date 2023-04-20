import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'dashboard-component',
        title: 'Dashboard',
        translate: 'Dashboard',
        type: 'item',
        icon: 'home',
        url: '/dashboard',
      },
      {
        id: 'model-component',
        title: 'Model',
        translate: 'Model',
        type: 'item',
        icon: 'view_in_ar',
        url: '/model',
      },
      // {
      //   id: 'datastore-component',
      //   title: 'Datastore',
      //   translate: 'Datastore',
      //   type: 'item',
      //   icon: 'storage',
      //   url: '/datastore',
      // },
      {
        id: 'accounts-component',
        title: 'Accounts',
        translate: 'Accounts',
        type: 'item',
        icon: 'person',
        url: '/accounts',
      },
      // {
      //   id: 'instances-component',
      //   title: 'Instances',
      //   translate: 'Instances',
      //   type: 'item',
      //   icon: 'class',
      //   url: '/instances',
      // },
      {
        id: 'apikeys-component',
        title: 'API Keys',
        translate: 'API Keys',
        type: 'item',
        icon: 'vpn_key',
        url: '/apikeys',
      },
      {
        id: 'notebooks-component',
        title: 'Notebooks',
        translate: 'Notebooks',
        type: 'item',
        icon: 'note',
        url: '/notebooks',
      },
      // {
      //   id: 'community-component',
      //   title: 'Community',
      //   translate: 'Community',
      //   type: 'item',
      //   icon: 'forum',
      //   url: '/community',
      // },
      {
        id: 'featurerequest-component',
        title: 'Feature Request',
        translate: 'Feature Request',
        type: 'item',
        icon: 'lightbulb',
        url: '/featurerequest',
      },
      {
        id: 'affiliatePrograme-component',
        title: 'Affiliate Program',
        translate: 'Affiliate Program',
        type: 'item',
        icon: 'attach_money',
        url: '/affiliateprogram',
      },
      {
        id: 'status-component',
        title: 'Status',
        translate: 'Status',
        type: 'item',
        icon: 'info',
        url: '/status',
      },
      {
        id: 'docs-component',
        title: 'Docs',
        translate: 'Docs',
        type: 'item',
        icon: 'description',
        url: '/docs',
      },
      {
        id: 'whatnew-component',
        title: "What's New?",
        translate: "What's New?",
        type: 'item',
        icon: 'new_releases',
        url: '/whatnew',
      },
      {
        id: 'help-component',
        title: 'Help',
        translate: 'Help',
        type: 'item',
        icon: 'help',
        url: '/help',
      },
   
    ],

    
    
  },

  {
    id: 'Admin',
    title: 'Admin',
    translate: 'Admin',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'dashboard-component-admin',
        title: 'Dashboard',
        translate: 'Dashboard',
        type: 'item',
        icon: 'home',
        url: '/AdminDashboard',
      },
      {
        id: 'accounts-component-user',
        title: 'Users',
        translate: 'Users',
        type: 'item',
        icon: 'person',
        url: '/userdetails',
      },
      
   ],

    
    
  },
];

export default navigationConfig;
