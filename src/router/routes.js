
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'Send/', component: () => import('pages/Send') },
      { path: 'About/', component: () => import('pages/About') },
      { path: 'Help/', component: () => import('pages/Help') },
      { path: 'Settings/', component: () => import('pages/Settings') },
    ],
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
