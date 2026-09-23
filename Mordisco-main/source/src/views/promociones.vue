<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://tse1.mm.bing.net/th/id/OIP.baON7MJUhYfRxEIT-VMiqQHaJR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      title="Promociones"
      description="Combos especiales pensados para compartir y ahorrar. ¡Válidas todos los días hasta agotar existencias!"
    />

    <div class="row q-col-gutter-lg">
      <div
        v-for="promo in promociones"
        :key="promo.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card class="product-card" flat bordered>
          <q-img :src="promo.image" :ratio="1" fit="fill">
            <q-badge color="warning" text-color="dark" floating class="text-weight-bold q-pa-sm" style="font-size: 12px; border-radius: 2px;">
              {{ promo.descuento }}
            </q-badge>
          </q-img>
          <q-card-section class="product-card__body">
            <div class="text-h6 font-title text-weight-bold">{{ promo.name }}</div>
            <div class="text-body2 text-grey-8 q-mt-xs">{{ promo.description }}</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="row items-center justify-between">
            <div>
              <span class="text-caption text-grey text-strike q-mr-sm">{{ promo.precioAntes }}</span>
              <span class="text-h6 text-weight-bold price-gold">{{ promo.precioAhora }}</span>
            </div>
            <q-btn round color="primary" icon="local_fire_department" size="sm" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CategoryBanner from '../components/CategoryBanner.vue'

const promociones = [
  {
    id: 1,
    name: 'Combo Pareja',
    description: '2 jugosas hamburguesas clásicas de la casa + porción grande de papas a la francesa crujientes para compartir + 2 bebidas bien heladas.',
    precioAntes: '$52.000',
    precioAhora: '$42.900',
    descuento: '-18%',
    image: 'https://tse2.mm.bing.net/th/id/OIP.CkyoB2ra0pJnQsLsU0ZFuQHaFE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 2,
    name: 'Noche de Pizza',
    description: 'Pizza mediana a elección con masa artesanal + gaseosa personal de 1.5L + porción de pan de ajo crujiente recién horneado con queso fundido.',
    precioAntes: '$41.000',
    precioAhora: '$33.500',
    descuento: '-18%',
    image: 'https://tse1.explicit.bing.net/th/id/OIP.Ifse33oBSQiwHzQdtdoZQAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 3,
    name: 'Combo Familiar',
    description: '4 perros calientes especiales + porción grande de papas hilo + 4 bebidas refrescantes + 1 delicioso postre para compartir en familia.',
    precioAntes: '$78.000',
    precioAhora: '$64.900',
    descuento: '-17%',
    image: 'https://img.freepik.com/fotos-premium/grupo-diverso-individuos-reunidos-alrededor-mesa-participando-acto-comer-comida-juntos-familia-reunida-alrededor-mesa-comedor-compartiendo-comida-alegre-generada-ia_585735-12456.jpg?w=1060'
  }
]
</script>