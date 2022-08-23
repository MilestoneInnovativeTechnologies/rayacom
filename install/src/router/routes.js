
import routes_customer from './routes_customer'
import routes_sales_executive from './routes_sales_executive'
import routes_admin from './routes_admin'


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'home', path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const login_routes = [
  {
    path: '/', component: () => import('layouts/LoginLayout.vue'),
    children: [ { name:'login', path: '', component: () => import('pages/LoginPage.vue') } ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const CUSTOMER_routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: routes_customer
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const SALES_EXECUTIVE_routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: routes_sales_executive
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const ADMIN_routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: routes_admin
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default (typeof AssetWorker === 'undefined') ? login_routes : (AUTH_TYPE ? (AUTH_TYPE === 'CUSTOMER' ? CUSTOMER_routes : (AUTH_TYPE === 'SALES_EXECUTIVE' ? SALES_EXECUTIVE_routes : ADMIN_routes)) : [])
