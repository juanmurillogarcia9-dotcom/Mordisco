<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white">
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3);">
      <div class="q-pa-xl">
        <div class="text-h3 text-weight-bold text-orange q-mb-sm">🍔 HAMBURGUESAS</div>
        <p class="text-grey-4 text-subtitle1" style="max-width: 800px;">
          Carne 100% de res, pan brioche horneado y toppings frescos. Preparadas al momento y con el tamaño perfecto que buscas.
        </p>
      </div>
    </div>

    <div class="row q-col-gutter-xl">
      <div
        v-for="product in productos"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card class="bg-grey-10 text-white q-pa-lg relative-position flex column justify-between shadow-15 menu-card" style="border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; height: 100%; min-height: 480px;">
          
          <q-badge :color="product.tagColor" text-color="white" :label="product.tag" class="absolute-top-right q-ma-md q-px-md q-py-xs text-weight-bold z-top text-subtitle2" />
          
          <div>
            <q-img :src="product.image" class="rounded-borders q-mb-md shadow-5" style="height: 260px; width: 100%; object-fit: cover;" />
            <div class="text-h6 text-weight-bold text-orange q-mb-xs" style="letter-spacing: 0.5px;">{{ product.name }}</div>
            <p class="text-grey-4 text-body1 q-mb-lg">{{ product.description }}</p>
          </div>

          <div class="row justify-between items-center q-pt-md" style="border-top: 1px solid rgba(255, 255, 255, 0.15);">
            <span class="text-h5 text-weight-bold text-orange">{{ product.price }}</span>
            <q-btn round color="orange" text-color="dark" icon="shopping_cart" size="md" unelevated class="shadow-3" />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const productos = [
  {
    id: 1,
    name: 'HAMBURGUESA CLÁSICA MAÍZ',
    description: 'Queso fundido, tocineta crujiente y maíz tierno sobre jugosa carne a la parrilla.',
    price: '$18.900',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=500&auto=format&fit=crop',
    tag: 'Más pedido',
    tagColor: 'orange'
  },
  {
    id: 2,
    name: 'HAMBURGUESA DOBLE BBQ',
    description: 'Doble carne, cebolla caramelizada, salsa artesanal y queso cheddar fundido.',
    price: '$22.000',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop',
    tag: 'Nuevo',
    tagColor: 'green'
  },
  {
    id: 3,
    name: 'HAMBURGUESA JALAPEÑO CRISPY',
    description: 'Toque picante de jalapeños frescos, pollo crocante y aderezo especial de la casa.',
    price: '$20.500',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500&auto=format&fit=crop',
    tag: 'Picante',
    tagColor: 'red'
  },
  {
    id: 4,
    name: 'HAMBURGUESA ARTESANAL RES',
    description: 'Carne 100% de res a la parrilla, pan brioche tostado y vegetales frescos del día.',
    price: '$19.900',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
    tag: 'Especial',
    tagColor: 'amber'
  },
  {
    id: 5,
    name: 'HAMBURGUESA MONSTER DOBLE',
    description: 'Doble porción de queso cheddar, tocineta ahumada y aros de cebolla crujientes.',
    price: '$24.000',
    image: 'https://tse3.mm.bing.net/th/id/OIP.JGDXjq4UuDf1RyXr2sE1uAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Recomendado',
    tagColor: 'blue'
  },
  {
    id: 6,
    name: 'HAMBURGUESA TRUFADA',
    description: 'Salsa de setas, champiñones salteados, queso suizo y un toque elegante de trufa.',
    price: '$25.500',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=500&auto=format&fit=crop',
    tag: 'Chef',
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