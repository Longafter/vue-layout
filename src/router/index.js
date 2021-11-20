import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

/* Layout */
import Layout from '@/layout/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { title: 'Dashboard' }
      }
    ]
  },
  {
    path: '/icon',
    name: 'Icons',
    component: Layout,
    children: [
      {
        path: '/icon',
        name: 'Icons',
        component: () => import('@/views/icon/Icon.vue'),
        meta: { title: 'Icons' }
      }
    ]
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Layout,
    children: [
      {
        path: '/keyboard',
        name: 'KeyboardChart',
        component: () => import('@/views/charts/Keyboard.vue'),
        meta: { title: 'Keyboard Chart' }
      },
      {
        path: '/line',
        name: 'LineChart',
        component: () => import('@/views/charts/LineChart.vue'),
        meta: { title: 'Line Chart' }
      },
      {
        path: '/mix-chart',
        name: 'MixChart',
        component: () => import('@/views/charts/MixChart.vue'),
        meta: { title: 'Mix Chart' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
