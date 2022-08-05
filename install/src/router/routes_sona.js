export default [
  { name:'ITEM', path:'/item', props: true, component: () => import('pages/itemPage.vue'), meta:{title:'Items'} },
  { name: 'ORDER', path: '/order', props: true, component: () => import('pages/orderPage.vue'), meta:{title:'Order'} },
  { name: 'PROFILE', path: '/profile', props: true, component: () => import('pages/myprofilePage.vue'), meta:{title:'Profile'} },
  { name: 'DASHBOARD', path: '/dashboard', props: true, component: () => import('pages/dashboardPage.vue'), meta:{title:'Dashboard'} },
  { name: 'ORDERHISTORY', path: '/orderhistory', props: true, component: () => import('pages/orderhistoryPage.vue'), meta:{title:'Order History'} },
  { name: 'SALESEXECIVEDASHBOARD', path: '/salesexecutive_dashbord', props: true, component: () => import('pages/salesexecutive_dashbordPage.vue'), meta:{title:'Executive Dashboard'} },

]
