export default [
  { name:'home', path: '', component: () => import('pages/IndexPage.vue') },

  { name: 'SALESEXECUTIVEDASHBOARD', path: '/salesexecutive_dashbord', props: true,
    component: () => import('pages/se_dashbordPage.vue'), meta:{ title: 'DASHBOARD'},
    menu: { title:'DASHBOARD',caption:'DASHBOARD',icon:'manage_accounts' } },
  { name: 'SALESEXECUTIVEORDEHISTORY', path: '/salesexecutive_orderhistory', props: true,
    component: () => import('pages/se_orderhistoryPage.vue'), meta:{ title: 'ORDER HISTORY'} ,
    menu: { title:'ORDER HISTORY',caption:'ORDER HISTORY',icon:'history' } },
  { name: 'SALESEXECUTIVELEAVES', path: '/salesexecutive_leaves', props: true,
    component: () => import('pages/se_leavesPage.vue'), meta:{ title: 'Executive Leaves'},
    menu:{title: 'LEAVES', caption: 'LEAVES', icon: 'sick'} },
  { name: 'LEAVEADD', path: '/leave_add', props: true, component: () => import('pages/leave_addPage.vue'),
    meta:{ title: 'ADD LEAVE'} },
  { name:'SALESEXECUTIVEPROFILE', path:'/profile', component: () => import('pages/salesexecutive_profile.vue'),
    menu:{title: 'PROFILE', caption: 'PROFILE', icon: 'account_circle'} },


]
