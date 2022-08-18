export default [
  { name:'ITEM', path:'/item', props: true, component: () => import('pages/itemPage.vue'), meta:{ title: 'Items'} },
  { name: 'ORDER', path: '/order', props: true, component: () => import('pages/orderPage.vue'), meta:{ title: 'Order'} },
  { name: 'PROFILE', path: '/profile', props: true, component: () => import('pages/myprofilePage.vue'), meta:{ title: 'Profile'} },
  { name: 'DASHBOARD', path: '/dashboard', props: true, component: () => import('pages/dashboardPage.vue'), meta:{ title: 'Dashboard'} },
  { name: 'ORDERHISTORY', path: '/orderhistory', props: true, component: () => import('pages/orderhistoryPage.vue'), meta:{ title: 'Order History'} },

  { name: 'SALESEXECUTIVEDASHBOARD', path: '/salesexecutive_dashbord', props: true, component: () => import('pages/se_dashbordPage.vue'), meta:{ title: 'Executive Dashboard'} },
  { name: 'SALESEXECUTIVEORDEHISTORY', path: '/salesexecutive_orderhistory', props: true, component: () => import('pages/se_orderhistoryPage.vue'), meta:{ title: 'Executive Order History'} },
  { name: 'SALESEXECUTIVELEAVES', path: '/salesexecutive_leaves', props: true, component: () => import('pages/se_leavesPage.vue'), meta:{ title: 'Executive Leaves'} },
  { name: 'LEAVEADD', path: '/leave_add', props: true, component: () => import('pages/leave_addPage.vue'), meta:{ title: 'Leave'} },

  { name: 'ADMINDASHBOARD', path: '/admin_dashbord', props: true, component: () => import('pages/adminDashboardPage.vue'), meta:{ title: 'Dashboard'} },
  { name: 'ADMINORDERHISTORY', path: '/admin_orderhistory', props: true, component: () => import('pages/admin_orderhistoryPage.vue'), meta:{ title: 'Order History'} },
  { name: 'ADMINPROFILE', path: '/admin_profile', props: true, component: () => import('pages/admin_profilePage.vue'), meta:{ title: 'Profile'} },
  { name: 'ADMINAREA', path: '/admin_area', props: true, component: () => import('pages/admin_areaPage.vue'), meta:{ title: 'Area'} },
  { name: 'AREAADD', path: '/area_add', props: true, component: () => import('pages/area_addPage.vue'), meta:{ title: 'Area'} },
  { name: 'ADMINITEMS', path: '/admin_items', props: true, component: () => import('pages/admin_itemPage.vue'), meta:{ title: 'Items'} },
  { name: 'ITEMADD', path: '/item_add', props: true, component: () => import('pages/item_addPage.vue'), meta:{ title: 'Item'} },
  { name: 'ADMINCUSTOMERS', path: '/admin_customer', props: true, component: () => import('pages/admin_customerPage.vue'), meta:{ title: 'Customers'} },
  { name: 'CUSTOMERADD', path: '/customer_add', props: true, component: () => import('pages/customer_addPage.vue'), meta:{ title: 'Customer'} },

  { name: 'TEST', path: '/test', props: true, component: () => import('pages/test.vue'), meta:{ title: 'test'} },

]
