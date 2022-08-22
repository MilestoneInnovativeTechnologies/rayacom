export default [
  { name:'home', path: '', component: () => import('pages/IndexPage.vue') },
  { name: 'DASHBOARD', path: '/dashboard', props: true, component: () => import('pages/dashboardPage.vue'),
    meta:{ title: 'DASHBOARD'}, menu:{title: 'DASHBOARD', caption: 'DASHBOARD', icon: 'home' } },
  { name:'ITEM', path:'/item', props: true, component: () => import('pages/itemPage.vue'), meta:{ title: 'Items'} },
  { name: 'ORDER', path: '/order', props: true, component: () => import('pages/orderPage.vue'), meta:{ title: 'Order'} },
  { name: 'REVIEWS', path: '/reviews', props: true, component: () => import('pages/reviewPage.vue'),
    meta:{ title: 'REVIEWS'}, menu:{title: 'REVIEWS', caption: 'REVIEWS', icon: 'comment' } },
  { name: 'REVIEWADD', path: '/review_add', props: true, component: () => import('pages/review_addPage.vue'),
    meta:{ title: 'ADD REVIEW'} },
  { name: 'ORDERHISTORY', path: '/ORDERHISTORY', props: true, component: () => import('pages/orderhistoryPage.vue'),
    meta:{ title: 'ORDERHISTORY'}, menu:{title: 'ORDERHISTORY', caption: 'ORDERHISTORY', icon: 'history' } },
  { name: 'PROFILE', path: '/profile', props: true, component: () => import('pages/myprofilePage.vue'),
    meta:{ title: 'PROFILE'}, menu:{title: 'PROFILE', caption: 'Profile', icon: 'account_circle' } },
]