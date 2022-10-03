export default [
  { name:'home', path: 'home', component: () => import('pages/IndexPage.vue') },
  // { name:'firose', path:'/firose', component: () => import('pages/Firose.vue'), meta:{ title:'Firose Page' },
  //   menu: { title:'Firose',caption:'Firose Experiment Page',icon:'beach_access' } },
  { name: 'ADMINDASHBOARD', path: '', props: true, component: () => import('pages/adminDashboardPage.vue'),
    meta:{ title: 'DASHBOARD'}, menu: { title:'DASHBOARD',caption:'View the highlights of your business at a glance.',icon:'home' } },
  { name: 'REVIEWS', path: '/reviews', props: true, component: () => import('pages/admin_reviewPage.vue'),
    meta:{ title: 'REVIEWS'}, menu: { title:'REVIEWS',caption:'View the reviews that customers made on Products, Orders and Sales Executives',icon:'comment_bank' } },
  { name: 'LEAVES', path: '/admin_leave', props: true, component: () => import('pages/admin_leavePage.vue'),
    meta:{ title: 'LEAVES'}, menu: { title:'LEAVES',caption:'Take actions on leaves that your sales executives applies',icon:'sick' } },
  { name: 'ADMINAREA', path: '/admin_area', props: true, component: () => import('pages/admin_areaPage.vue'),
    meta:{ title: 'AREA'}, menu: { title:'AREA',caption:'Add or update areas where you serve',icon:'area_chart' } },
  { name: 'AREAADD', path: '/area_add', props: true, component: () => import('pages/area_addPage.vue'),
    meta:{ title: 'AREA'} },
  { name: 'ADMINITEMS', path: '/admin_items', props: true, component: () => import('pages/admin_itemPage.vue'),
    meta:{ title: 'ITEMS'}, menu: { title:'ITEMS',caption:'Add or update the products in your business',icon:'add_shopping_cart' } },
  { name: 'ITEMADD', path: '/item_add', props: true, component: () => import('pages/item_addPage.vue')},
  { name: 'ADMINCUSTOMERS', path: '/admin_customer', props: true, component: () => import('pages/admin_customerPage.vue'),
    meta:{ title: 'CUSTOMERS'}, menu: { title:'CUSTOMERS',caption:'Add or update customers of your business',icon:'people' } },
  { name: 'CUSTOMERADD', path: '/customer_add', props: true, component: () => import('pages/customer_addPage.vue')},
  { name: 'ADMINSALESXECUTIVEPAGE', path: '/sales', props: true, component: () => import('pages/admin_salesexecutivePage.vue'),
    meta:{ title: 'SALES EXECUTIVE'}, menu: { title:'SALES EXECUTIVE',caption:'Add or update sales executives of your business',icon:'perm_contact_calendar' } },
  { name: 'SALESEXECUTIVEADD', path: '/salesexecutiveadd', props: true, component: () => import('pages/salesexecutive_addPage.vue'),
    meta:{ title: 'SALESXECUTIVE'} },
  { name: 'ADMINORDERHISTORY', path: '/admin_orderhistory', props: true, component: () => import('pages/admin_orderhistoryPage.vue'),
    meta:{ title: 'ORDER HISTORY'}, menu: { title:'ORDER HISTORY',caption:'View the statuses of all the orders placed by your customers',icon:'history' } },
  { name: 'ADMINPROFILE', path: '/admin_profile', props: true, component: () => import('pages/admin_profilePage.vue'),
    meta:{ title: 'Profile'}, menu: { title:'PROFILE',caption:'Update your detail and stay upto date..',icon:'manage_accounts' } },

  // { name: 'TEST', path: '/test', props: true, component: () => import('pages/test.vue'),
  //   meta:{ title: 'Profile'}, menu: { title:'DEVELOPMENT PAGE',caption:'Testing',icon:'manage_accounts' } },
]
