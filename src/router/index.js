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
    name: 'Dashboard',
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
    path: '/charts',
    component: Layout,
    redirect: '/charts/keyboard',
    name: 'Charts',
    meta: { title: 'Example', icon: 'el-icon-s-help'},
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
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/reverse',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help'},
    children: [
      {
        path: '/reverse',
        name: 'Reverse',
        component: () => import('@/views/reverse/Reverse.vue'),
        meta: { title: 'Reverse' }
      },
      {
        path: '/flex-grid',
        name: 'FlexGrid',
        component: () => import('@/views/flexGrid/FlexGrid.vue'),
        meta: { title: 'FlexGrid' }
      }
    ]
  },
  {
    path: '/map',
    component: Layout,
    redirect: '/map',
    name: 'Map',
    children: [
      {
        path: '/map',
        name: 'Map',
        component: () => import('@/views/map/Map.vue'),
        meta: { title: 'Map' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
