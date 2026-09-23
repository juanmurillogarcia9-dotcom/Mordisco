<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white">
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3);">
      <div class="q-pa-xl">
        <div class="text-h3 text-weight-bold text-orange q-mb-sm">🔥 PROMOCIONES ESPECIALES</div>
        <p class="text-grey-4 text-subtitle1" style="max-width: 800px;">
          Aprovecha nuestros combos y descuentos diseñados especialmente para ti. ¡Disfruta más y ahorra mejor!
        </p>
      </div>
    </div>

    <div class="row q-col-gutter-xl">
      <div
        v-for="promo in promociones"
        :key="promo.id"
        class="col-12 col-sm-6 col-md-3"
      >
        <q-card class="bg-grey-10 text-white q-pa-lg relative-position flex column justify-between shadow-15 menu-card" style="border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; height: 100%; min-height: 480px;">
          
          <q-badge :color="promo.tagColor" text-color="white" :label="promo.tag" class="absolute-top-right q-ma-md q-px-md q-py-xs text-weight-bold z-top text-subtitle2" />
          
          <div>
            <q-img :src="promo.image" class="rounded-borders q-mb-md shadow-5" style="height: 220px; width: 100%; object-fit: cover;" />
            <div class="text-h6 text-weight-bold text-orange q-mb-xs" style="letter-spacing: 0.5px;">{{ promo.name }}</div>
            <p class="text-grey-4 text-body2 q-mb-lg">{{ promo.description }}</p>
          </div>

          <div class="row justify-between items-center q-pt-md" style="border-top: 1px solid rgba(255, 255, 255, 0.15);">
            <div>
              <div class="text-caption text-grey-5 text-strike">{{ promo.oldPrice }}</div>
              <span class="text-h5 text-weight-bold text-orange">{{ promo.price }}</span>
            </div>
            <q-btn round color="orange" text-color="dark" icon="shopping_cart" size="md" unelevated class="shadow-3" />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const promociones = [
  {
    id: 1,
    name: 'COMBO PAREJA',
    description: '2 Hamburguesas artesanales a elección + 1 orden grande de papas francesas + 2 gaseosas de 400ml bien frías.',
    price: '$38.900',
    oldPrice: '$48.000',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop',
    tag: '20% OFF',
    tagColor: 'red'
  },
  {
    id: 2,
    name: 'MARTES DE PIZZA',
    description: '1 Pizza familiar de tu sabor favorito (Margarita, Hawaiana o Pollo) + 1 Limonada de coco grande de cortesía.',
    price: '$32.000',
    oldPrice: '$40.000',
    image: 'https://tse1.mm.bing.net/th/id/OIP.C-Sb26HYKVUk1Mywhga8KgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Familiar',
    tagColor: 'green'
  },
  {
    id: 3,
    name: 'COMBO HOT DOG LOVER',
    description: '2 Perros calientes rancheros o especiales + 2 malteadas artesanales de fresa o chocolate.',
    price: '$29.900',
    oldPrice: '$37.500',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=500&auto=format&fit=crop',
    tag: 'Ahorro',
    tagColor: 'blue'
  },
  {
    id: 4,
    name: 'DUPLA DULCE',
    description: '1 Brownie con helado + 1 Cheesecake de maracuyá para compartir el final perfecto de tu comida.',
    price: '$21.000',
    oldPrice: '$26.000',
    image: 'https://tse1.mm.bing.net/th/id/OIP.BZ9GrxTCoV2ILBWBuvdsxQHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Antojo',
    tagColor: 'purple'
  }
]
</script>

<style scoped>
.menu-card {
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.menu-card:hover {
  border-color: rgba(255, 152, 0, 0.8) !important;
  transform: translateY(-6px);
}
</style>