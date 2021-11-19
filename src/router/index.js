import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

/* Layout */
import Layout from '@/layout/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { title: 'Dashboard' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
