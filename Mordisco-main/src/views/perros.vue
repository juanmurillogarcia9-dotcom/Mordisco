<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white">
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3);">
      <div class="q-pa-xl">
        <div class="text-h3 text-weight-bold text-orange q-mb-sm">🌭 PERROS CALIENTES</div>
        <p class="text-grey-4 text-subtitle1" style="max-width: 800px;">
          Salchicha alemana premium, pan suave al vapor y una explosión de salsas y toppings a tu gusto.
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
          
          <q-badge v-if="product.tag" :color="product.tagColor" text-color="white" :label="product.tag" class="absolute-top-right q-ma-md q-px-md q-py-xs text-weight-bold z-top text-subtitle2" />
          
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
    name: 'PERRO SENCILLO',
    description: 'Salchicha clásica, papas hilo, salsa rosada, mostaza y queso rallado.',
    price: '$10.500',
    image: 'https://tse4.mm.bing.net/th/id/OIP.JVFnu9faivL75x1qmLbwdwHaG2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido',
    tagColor: 'orange'
  },
  {
    id: 2,
    name: 'PERRO RANCHERO',
    description: 'Salchicha, tocineta, maíz tierno, cebolla crispy y salsa ranchera.',
    price: '$14.900',
    image: 'https://tse1.mm.bing.net/th/id/OIP.FMa7K1uGX2U4GMFXbWOmvQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Nuevo',
    tagColor: 'green'
  },
  {
    id: 3,
    name: 'PERRO JALAPEÑO',
    description: 'Salchicha doble, jalapeños encurtidos, queso cheddar fundido y salsa picante.',
    price: '$15.500',
    image: 'https://tse3.mm.bing.net/th/id/OIP.mcIGw1LGxXDhHcVRceWObgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Picante',
    tagColor: 'red'
  },
  {
    id: 4,
    name: 'PERRO VEGETARIANO',
    description: 'Salchicha de vegetales, aguacate, tomate cherry y salsa de yogur.',
    price: '$13.500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8bqEFKGkq8sQ8cAN3J4_YlSNyem6SDfTujZ5w-rK3A&s=10',
    tag: 'Vegetariano',
    tagColor: 'teal'
  },
  {
    id: 5,
    name: 'PERRO BBQ',
    description: 'Salchicha ahumada bañada en salsa BBQ artesanal, cebolla crispy y queso fundido.',
    price: '$16.500',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=600&auto=format&fit=crop',
    tag: 'Popular',
    tagColor: 'amber'
  },
  {
    id: 6,
    name: 'PERRO ESPECIAL DE LA CASA',
    description: 'Doble salchicha alemana, tocineta, queso derretido, papas hilo y piña caramelizada.',
    price: '$19.900',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmaOo7zGwnc-LPQNQNPgqgQ5CHr7xq6NpKt5UhBYduA&s=10',
    tag: 'Especial',
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