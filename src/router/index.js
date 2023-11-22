import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import SeriesView from '@/views/SeriesView.vue'
import Login from '@/views/LoginView.vue'
import Logout from '@/views/LogoutView.vue'
import Channels from '@/views/ChannelsView.vue'

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
      component: Channels
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
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Logout',
      name: 'logout',
      component: Logout
    }


  ],

})

export default router
