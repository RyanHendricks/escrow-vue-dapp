
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'SendETH/', component: () => import('pages/SendETH') },
      { path: 'Status/', component: () => import('pages/Status') },
    ],
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
