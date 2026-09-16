<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="app-header text-white">
      <q-toolbar class="site-toolbar">
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="mobile-menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row items-center no-wrap q-gutter-sm">
          <img
            class="brand-image"
            src="https://tse4.mm.bing.net/th/id/OIP.s1l1JjrbUPpow10-uzSiQgHaHa?r=0&w=980&h=980&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Mordisco"
          >
          <span class="brand-name">Mordisco</span>
        </q-toolbar-title>

        <nav class="desktop-nav row items-center q-gutter-xs">
          <q-btn flat no-caps to="/hamburguesas" label="Hamburguesas" />
          <q-btn flat no-caps to="/perros" label="Perros" />
          <q-btn flat no-caps to="/pizzas" label="Pizzas" />
          <q-btn flat no-caps to="/bebidas" label="Bebidas" />
          <q-btn flat no-caps to="/postres" label="Postres" />
        </nav>

        <q-btn to="/promociones" unelevated no-caps label="Pedir ahora" class="order-button q-ml-md" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="premium-drawer"
    >
      <q-list padding>

        <div class="drawer-brand q-px-md q-pb-md">
          <img
            class="drawer-brand__image"
            src="https://tse4.mm.bing.net/th/id/OIP.s1l1JjrbUPpow10-uzSiQgHaHa?r=0&w=980&h=980&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
          >
          <span class="brand-mark">MORDISCO · MENÚ DIGITAL</span>
        </div>

        <q-item clickable v-close-popup to="/">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/hamburguesas">
          <q-item-section avatar><q-icon name="lunch_dining" /></q-item-section>
          <q-item-section>Hamburguesas</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/perros">
          <q-item-section avatar><q-icon name="restaurant" /></q-item-section>
          <q-item-section>Perros</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/pizzas">
          <q-item-section avatar><q-icon name="local_pizza" /></q-item-section>
          <q-item-section>Pizzas</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/bebidas">
          <q-item-section avatar><q-icon name="local_bar" /></q-item-section>
          <q-item-section>Bebidas</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/postres">
          <q-item-section avatar><q-icon name="cake" /></q-item-section>
          <q-item-section>Postres</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/promociones">
          <q-item-section avatar><q-icon name="local_offer" /></q-item-section>
          <q-item-section>Promociones</q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/nosotros">
          <q-item-section avatar><q-icon name="groups" /></q-item-section>
          <q-item-section>Nosotros</q-item-section>
        </q-item>

      </q-list>

      <div class="drawer-bottom">
        <div class="drawer-bottom__line"></div>
        <div class="drawer-bottom__eyebrow">HECHO AL MOMENTO</div>
        <div class="drawer-bottom__title">El hambre no espera.</div>
        <q-btn
          to="/promociones"
          unelevated
          no-caps
          label="Pedir ahora"
          class="drawer-order-button"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="premium-footer">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          MORDISCO · COMIDA QUE DEJA HUELLA
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>