<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="app-header text-white">
      <q-toolbar class="site-toolbar">
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

        <q-btn unelevated no-caps label="Pedir ahora" class="order-button q-ml-md" @click="openOrderModal" />
      </q-toolbar>
    </q-header>

    <!-- Diálogo / Modal de Pedido -->
    <q-dialog v-model="orderDialog" persistent>
      <q-card style="min-width: 450px; max-width: 650px;" class="q-pa-lg bg-grey-10 text-white shadow-24 rounded-borders">
        <q-card-section class="row items-center q-pb-md">
          <div class="text-h5 text-weight-bold flex items-center q-gutter-sm">
            <q-icon name="shopping_cart" color="orange" size="sm" />
            <span>Realiza tu Pedido</span>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup class="text-white" />
        </q-card-section>

        <q-card-section class="q-gutter-lg q-py-md">
          <!-- 1. Selección de Categoría con nombres visibles -->
          <q-select
            v-model="selectedCategory"
            :options="categories"
            label="¿Qué deseas pedir?"
            outlined
            dark
            color="orange"
            label-color="orange"
            emit-value
            map-options
            @update:model-value="onCategoryChange"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" class="text-white">
                <q-item-section>
                  <q-item-label class="text-weight-medium text-subtitle1">{{ scope.opt.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <!-- 2. Selección de Sabor / Producto -->
          <q-select
            v-if="selectedCategory"
            v-model="selectedProduct"
            :options="currentProducts"
            label="Elige el sabor u opción"
            outlined
            dark
            color="orange"
            label-color="orange"
            option-label="name"
            option-value="price"
            emit-value
            map-options
          />

          <!-- 3. Opción Extra (Mixta / Sencilla si aplica) -->
          <q-select
            v-if="selectedCategory === 'pizzas' || selectedCategory === 'hamburguesas'"
            v-model="selectedType"
            :options="['Tradicional', 'Mixta (Doble porción)', 'Especial de la casa']"
            label="Tipo de preparación"
            outlined
            dark
            color="orange"
            label-color="orange"
          />

          <!-- 4. Total a Pagar -->
          <div v-if="selectedProduct" class="q-mt-md text-h6 text-weight-bold text-orange-4">
            Total a pagar: ${{ selectedProduct }}
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-mt-lg q-gutter-sm">
          <q-btn flat label="Cancelar" color="grey-4" v-close-popup />
          <q-btn 
            unelevated 
            label="Comprar ahora" 
            color="orange-8" 
            class="text-weight-bold q-px-md"
            :disabled="!selectedProduct" 
            @click="realizarCompra" 
            v-close-popup 
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

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
import { useQuasar } from 'quasar'

const $q = useQuasar()
const orderDialog = ref(false)

const selectedCategory = ref(null)
const selectedProduct = ref(null)
const selectedType = ref(null)
const currentProducts = ref([])

const categories = [
  { label: '🍕 Pizzas', value: 'pizzas' },
  { label: '🍔 Hamburguesas', value: 'hamburguesas' },
  { label: '🌭 Perros Calientes', value: 'perros' },
  { label: '🥤 Bebidas', value: 'bebidas' },
  { label: '🍰 Postres', value: 'postres' }
]

const productsData = {
  pizzas: [
    { name: 'Pizza Margarita', price: '26.000' },
    { name: 'Pizza Hawaiana', price: '28.500' },
    { name: 'Pizza Diabla', price: '29.900' },
    { name: 'Pizza Cuatro Quesos', price: '32.900' }
  ],
  hamburguesas: [
    { name: 'Hamburguesa Clásica', price: '22.000' },
    { name: 'Hamburguesa Doble Carne con Tocineta', price: '27.500' },
    { name: 'Hamburguesa Crispy Chicken', price: '24.000' }
  ],
  perros: [
    { name: 'Perro Sencillo con Queso', price: '14.000' },
    { name: 'Perro Mexicano con Jalapeños', price: '18.500' }
  ],
  bebidas: [
    { name: 'Limonada de Coco', price: '8.500' },
    { name: 'Malteada de Fresa', price: '11.500' },
    { name: 'Granizado de Café Moka', price: '10.900' }
  ],
  postres: [
    { name: 'Brownie con Helado', price: '12.500' },
    { name: 'Cheesecake de Maracuyá', price: '13.500' },
    { name: 'Volcán de Chocolate', price: '15.900' }
  ]
}

function openOrderModal () {
  selectedCategory.value = null
  selectedProduct.value = null
  selectedType.value = null
  currentProducts.value = []
  orderDialog.value = true
}

function onCategoryChange (category) {
  selectedProduct.value = null
  currentProducts.value = productsData[category] || []
}

function realizarCompra () {
  $q.notify({
    color: 'positive',
    position: 'top',
    message: '¡Pedido realizado con éxito! En breve te contactaremos.',
    icon: 'check_circle'
  })
}
</script>