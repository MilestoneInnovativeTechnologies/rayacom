export default [
  { name:'home', path: 'home', component: () => import('pages/se_dashbordPage.vue') },

  { name: 'SALESEXECUTIVEDASHBOARD', path: '', props: true,
    component: () => import('pages/se_dashbordPage.vue'), meta:{ title: 'DASHBOARD'},
    menu: { title:'DASHBOARD',caption:'Ongoing orders and attention required data at a glance',icon:'manage_accounts' } },
  { name: 'SALESEXECUTIVEORDEHISTORY', path: '/salesexecutive_orderhistory', props: true,
    component: () => import('pages/se_orderhistoryPage.vue'), meta:{ title: 'ORDER HISTORY'} ,
    menu: { title:'ORDER HISTORY',caption:'All the orders that your customer made',icon:'history' } },
  { name: 'SALESEXECUTIVELEAVES', path: '/salesexecutive_leaves', props: true,
    component: () => import('pages/se_leavesPage.vue'), meta:{ title: 'LEAVES'},
    menu:{title: 'LEAVES', caption: 'Apply for new leaves or view statuses of leaves you applied', icon: 'sick'} },
  { name: 'LEAVEADD', path: '/leave_add', props: true, component: () => import('pages/leave_addPage.vue'),
    meta:{ title: 'ADD LEAVE'} },
  { name:'SALESEXECUTIVEPROFILE', path:'/profile', component: () => import('pages/se_profile.vue'),
    menu:{title: 'PROFILE', caption: 'Update your details and become upto date..', icon: 'account_circle'} },


]
