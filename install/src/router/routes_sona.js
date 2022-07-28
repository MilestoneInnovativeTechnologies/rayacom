export default [
  { name:'ITEM', path:'/item', props: true, component: () => import('pages/itemPage.vue') },
  { name: 'ORDER', path: '/order', props: true, component: () => import('pages/orderPage.vue') },
  // { name: 'SUMMARY', path: '/summary', props: true, component: () => import('pages/summaryPage.vue') },

]
