export default [
  { name:'search', path:'/search', component: () => import('pages/search.vue') },
  { name:'SALESEXECUTIVEPROFILE', path:'/profile', component: () => import('pages/salesexecutive_profile.vue') ,meta:{ title: 'Executive Profile'} },
  { name:'ADMINSALESXECUTIVEPAGE', path:'/sales', component: () => import('pages/admin_salesexecutivePage.vue') , meta:{ title: 'Sales executive'} },
  { name:'SALESEXECUTIVEADD', path:'/salesexecutiveadd',  props: true, component: () => import('pages/salesexecutive_addPage.vue') },


]
