export default [
  { name:'firose', path:'/firose', component: () => import('pages/Firose.vue'), meta:{ title:'Firose Page' }, menu: { title:'Firose',caption:'Firose Experiment Page',icon:'beach_access' } },
  { name: 'ADMINDASHBOARD', path: '/admin_dashbord', props: true, component: () => import('pages/adminDashboardPage.vue'), meta:{ title: 'Dashboard'} },
  { name: 'ADMINORDERHISTORY', path: '/admin_orderhistory', props: true, component: () => import('pages/admin_orderhistoryPage.vue'), meta:{ title: 'Order History'} },
  { name: 'ADMINPROFILE', path: '/admin_profile', props: true, component: () => import('pages/admin_profilePage.vue'), meta:{ title: 'Profile'} },
  { name: 'ADMINAREA', path: '/admin_area', props: true, component: () => import('pages/admin_areaPage.vue'), meta:{ title: 'Area'} },
  { name: 'AREAADD', path: '/area_add', props: true, component: () => import('pages/area_addPage.vue'), meta:{ title: 'Area'} },
  { name: 'ADMINITEMS', path: '/admin_items', props: true, component: () => import('pages/admin_itemPage.vue'), meta:{ title: 'Items'} },
  { name: 'ITEMADD', path: '/item_add', props: true, component: () => import('pages/item_addPage.vue'), meta:{ title: 'Item'} },
  { name: 'ADMINCUSTOMERS', path: '/admin_customer', props: true, component: () => import('pages/admin_customerPage.vue'), meta:{ title: 'Customers'} },
  { name: 'CUSTOMERADD', path: '/customer_add', props: true, component: () => import('pages/customer_addPage.vue'), meta:{ title: 'Customer'} },

]
