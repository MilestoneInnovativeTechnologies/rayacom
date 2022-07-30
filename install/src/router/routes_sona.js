export default [
  { name:'ITEM', path:'/item', props: true, component: () => import('pages/itemPage.vue'), meta:{title:'Items'} },
  { name: 'ORDER', path: '/order', props: true, component: () => import('pages/orderPage.vue'), meta:{title:'Order'} },
  { name: 'PROFILE', path: '/profile', props: true, component: () => import('pages/myprofilePage.vue'), meta:{title:'Profile'} },
  { name: 'DASHBOARD', path: '/dashboard', props: true, component: () => import('pages/dashboardPage.vue'), meta:{title:'Dashboard'} },
  // { name: 'SUMMARY', path: '/summary', props: true, component: () => import('pages/summaryPage.vue') },
]
