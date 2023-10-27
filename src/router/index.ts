import { createRouter, createWebHistory } from 'vue-router'
 // Certifique-se de ajustar o caminho para corresponder à estrutura do seu projeto.
import Layout from '../components/Layout.vue';
 // Use o caminho correto para o componente Layout


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/Inicio',
          name: 'inicio',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/InicioView.vue')
        }, {
          path: '/Videos',
          name: 'videos',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/SeriesView.vue')
        },

        {
          path: '/Channels',
          name: 'channels',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
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
      ]
    },
  
  ]
})

export default router
