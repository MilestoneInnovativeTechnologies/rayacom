export default [
  { name:'home', path: '', component: () => import('pages/IndexPage.vue') },
  { name:'ITEM', path:'/item', props: true, component: () => import('pages/itemPage.vue'), meta:{ title: 'Items'} },
  { name: 'ORDER', path: '/order', props: true, component: () => import('pages/orderPage.vue'), meta:{ title: 'Order'} },
  { name: 'PROFILE', path: '/profile', props: true, component: () => import('pages/myprofilePage.vue'), meta:{ title: 'Profile'}, menu:{title: 'PROFILE', caption: 'Profile', icon: 'account_circle' } },
  { name: 'DASHBOARD', path: '/dashboard', props: true, component: () => import('pages/dashboardPage.vue'), meta:{ title: 'Dashboard'} },
  { name: 'ORDERHISTORY', path: '/orderhistory', props: true, component: () => import('pages/orderhistoryPage.vue'), meta:{ title: 'Order History'} },
]
