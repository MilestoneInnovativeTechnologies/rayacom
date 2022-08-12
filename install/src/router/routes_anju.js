export default [
  { name:'search', path:'/search', component: () => import('pages/search.vue') },
  { name:'SALESEXECUTIVEPROFILE', path:'/profile', component: () => import('pages/salesexecutive_profile.vue') },
  { name:'ADMINSALESXECUTIVEPAGE', path:'/sales', component: () => import('pages/admin_salesexecutivePage.vue') },
  { name:'SALESEXECUTIVEADD', path:'/salesexecutiveadd',  props: true, component: () => import('pages/salesexecutive_addPage.vue') },


]
