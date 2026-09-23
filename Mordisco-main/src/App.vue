<template>
  <q-layout view="hHh lpR fFf">
    <!-- Barra de navegación superior -->
    <q-header class="bg-dark text-white shadow-2" style="border-bottom: 1px solid rgba(255, 152, 0, 0.3);">
      <q-toolbar class="q-px-lg">
        <q-toolbar-title class="row items-center no-wrap q-gutter-sm cursor-pointer" @click="$router.push('/')">
          <span class="text-weight-bold text-orange text-h5">🍔 Mordisco</span>
        </q-toolbar-title>

        <nav class="desktop-nav row items-center q-gutter-xs">
          <q-btn flat no-caps to="/" label="Inicio" />
          <q-btn flat no-caps to="/hamburguesas" label="Hamburguesas" />
          <q-btn flat no-caps to="/perros" label="Perros" />
          <q-btn flat no-caps to="/pizzas" label="Pizzas" />
          <q-btn flat no-caps to="/bebidas" label="Bebidas" />
          <q-btn flat no-caps to="/postres" label="Postres" />
          <q-btn flat no-caps to="/promociones" label="Promociones" class="text-orange text-weight-bold" />
          <q-btn flat no-caps to="/nosotros" label="Nosotros" class="text-weight-bold" />
        </nav>
      </q-toolbar>
    </q-header>

    <!-- AQUÍ SE CARGAN TUS VISTAS AUTOMÁTICAMENTE -->
    <q-page-container class="bg-dark text-white">
      <router-view />
    </q-page-container>

    <!-- Pie de página -->
    <q-footer class="bg-dark text-white q-py-sm" style="border-top: 1px solid rgba(255, 152, 0, 0.2);">
      <q-toolbar>
        <q-toolbar-title class="text-center text-subtitle2 text-grey-5">
          MORDISCO · COMIDA QUE DEJA HUELLA
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
</script>