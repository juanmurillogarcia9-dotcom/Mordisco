import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routers/routes.js' // O la ruta exacta donde tengas tu routes.js

// Estilos de Quasar y Material Icons
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
})

app.use(router) // ¡Esto es vital para que funcionen las vistas!

app.mount('#app')