import routes_firose from './routes_firose'
import routes_sona from './routes_sona'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'home', path: '', component: () => import('pages/IndexPage.vue') },


      ...routes_firose,
      ...routes_sona
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
