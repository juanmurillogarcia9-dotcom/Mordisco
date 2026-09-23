const routes = [
  {
    path: '/',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/hamburguesas',
    component: () => import('../views/hamburguesas.vue')
  },
  {
    path: '/perros',
    component: () => import('../views/perros.vue')
  },
  {
    path: '/pizzas',
    component: () => import('../views/pizzas.vue')
  },
  {
    path: '/bebidas',
    component: () => import('../views/bebidas.vue')
  },
  {
    path: '/postres',
    component: () => import('../views/postres.vue')
  },
  {
    path: '/promociones',
    component: () => import('../views/promociones.vue')
  },
  {
    path: '/nosotros',
    component: () => import('../views/nosotros.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Inicio.vue')
  }
]

export default routes