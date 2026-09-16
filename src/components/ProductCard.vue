<template>
  <q-card class="product-card" flat bordered>
    <q-img :src="product.image" :ratio="1" fit="cover" style="background: #121212; object-position: center;">
      <q-badge
        v-if="product.tag"
        :color="tagColor"
        text-color="white"
        floating
        class="text-weight-bold q-pa-sm"
        style="font-size: 12px; border-radius: 6px;"
      >
        {{ product.tag }}
      </q-badge>
    </q-img>

    <q-card-section class="product-card__body">
      <div class="text-h6 font-title text-weight-bold">{{ product.name }}</div>
      <div class="text-body2 product-description q-mt-xs" style="min-height: 40px;">
        {{ product.description }}
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section class="row items-center justify-between">
      <div class="text-h6 text-weight-bold price-gold">
        {{ product.price }}
      </div>
      <q-btn round class="add-button" icon="add_shopping_cart" size="sm" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: { type: Object, required: true }
})

const tagColors = {
  'Nuevo': 'positive',
  'Más pedido': 'warning',
  'Picante': 'negative',
  'Vegetariano': 'positive'
}

const tagColor = computed(() => tagColors[props.product.tag] || 'primary')
</script>
