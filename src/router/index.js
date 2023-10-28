import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import SeriesView from '@/views/SeriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    }, {
      path: '/Videos',
      name: 'videos',
      component: SeriesView
    },

    {
      path: '/Channels',
      name: 'channels',
      component: () => import('../views/FilmesView.vue')
    },
    {
      path: '/Mais',
      name: 'mais',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MaisView.vue')
    },
    {
      path: '/Service',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue')
    }
  ],

})

export default router
