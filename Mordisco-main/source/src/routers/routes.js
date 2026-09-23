import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/inicio.vue'
import Hamburguesas from '../views/hamburguesas.vue'
import Perros from '../views/perros.vue'
import Pizzas from '../views/pizzas.vue'
import Bebidas from '../views/bebidas.vue'
import Postres from '../views/postres.vue'
import Promociones from '../views/promociones.vue'
import Nosotros from '../views/nosotros.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: Hamburguesas
  },
  {
    path: '/perros',
    name: 'perros',
    component: Perros
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: Pizzas
  },
  {
    path: '/bebidas',
    name: 'bebidas',
    component: Bebidas
  },
  {
    path: '/postres',
    name: 'postres',
    component: Postres
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: Promociones
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: Nosotros
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
