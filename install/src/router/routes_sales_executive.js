export default [
  { name:'home', path: '', component: () => import('pages/IndexPage.vue') },

  { name:'search', path:'/search', component: () => import('pages/search.vue') },
  { name:'SALESEXECUTIVEPROFILE', path:'/profile', component: () => import('pages/salesexecutive_profile.vue'), menu:{title: 'SE PROFILE', caption: 'Sales Executive profile', icon: 'account_circle'} },
  { name:'ADMINSALESXECUTIVEPAGE', path:'/sales', component: () => import('pages/admin_salesexecutivePage.vue'), },
  { name:'SALESEXECUTIVEADD', path:'/salesexecutiveadd',  props: true, component: () => import('pages/salesexecutive_addPage.vue') },

  { name: 'SALESEXECUTIVEDASHBOARD', path: '/salesexecutive_dashbord', props: true, component: () => import('pages/se_dashbordPage.vue'), meta:{ title: 'Executive Dashboard'} },
  { name: 'SALESEXECUTIVEORDEHISTORY', path: '/salesexecutive_orderhistory', props: true, component: () => import('pages/se_orderhistoryPage.vue'), meta:{ title: 'Executive Order History'} },
  { name: 'LEAVEADD', path: '/leave_add', props: true, component: () => import('pages/leave_addPage.vue'), meta:{ title: 'Leave'} },


]
