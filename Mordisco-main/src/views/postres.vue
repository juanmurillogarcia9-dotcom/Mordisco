<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white">
    <!-- Banner de la Categoría -->
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3);">
      <div class="q-pa-xl">
        <div class="text-h3 text-weight-bold text-orange q-mb-sm">🍰 POSTRES</div>
        <p class="text-grey-4 text-subtitle1" style="max-width: 800px;">
          El final dulce perfecto: preparaciones caseras horneadas todos los días en nuestra cocina.
        </p>
      </div>
    </div>

    <!-- Cuadrícula de Productos (Cards Grandes) -->
    <div class="row q-col-gutter-xl">
      <div
        v-for="product in productos"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <!-- Tarjeta grande, elegante y con diseño consistente -->
        <q-card class="bg-grey-10 text-white q-pa-lg relative-position flex column justify-between shadow-15 menu-card" style="border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; height: 100%; min-height: 480px;">
          
          <!-- Etiqueta superior con color dinámico -->
          <q-badge v-if="product.tag" :color="product.tagColor" text-color="white" :label="product.tag" class="absolute-top-right q-ma-md q-px-md q-py-xs text-weight-bold z-top text-subtitle2" />
          
          <div>
            <!-- Imagen grande y espaciosa -->
            <q-img :src="product.image" class="rounded-borders q-mb-md shadow-5" style="height: 260px; width: 100%; object-fit: cover;" />
            <div class="text-h6 text-weight-bold text-orange q-mb-xs" style="letter-spacing: 0.5px;">{{ product.name }}</div>
            <p class="text-grey-4 text-body1 q-mb-lg">{{ product.description }}</p>
          </div>

          <!-- Pie de tarjeta con precio y botón de carrito -->
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
    name: 'BROWNIE CON HELADO',
    description: 'Brownie tibio y melcochudo de chocolate amargo, acompañado de una bola de helado artesanal de vainilla, bañado en salsa caliente de chocolate y lluvia de maní.',
    price: '$12.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.BZ9GrxTCoV2ILBWBuvdsxQHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido',
    tagColor: 'orange'
  },
  {
    id: 2,
    name: 'CHEESECAKE DE MARACUYÁ',
    description: 'Clásica base de galleta crujiente, suave y cremoso relleno de queso crema, cubierto con una capa de reducción de maracuyá natural agridulce y semillas.',
    price: '$13.500',
    image: 'https://tse3.mm.bing.net/th/id/OIP.ruUutaZke4kqnwrN44X8AgHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Nuevo',
    tagColor: 'green'
  },
  {
    id: 3,
    name: 'COPA DE FRUTAS',
    description: 'Refrescante mezcla de frutas frescas de temporada (fresa, banano, papaya y piña), servidas con un toque de miel de abejas pura y granola crujiente artesanal.',
    price: '$9.900',
    image: 'https://tse3.mm.bing.net/th/id/OIP.73WQq1n9AElA_D6Jz54R1QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Vegetariano',
    tagColor: 'teal'
  },
  {
    id: 4,
    name: 'WAFFLE CON NUTELLA',
    description: 'Waffle artesanal recién horneado y crocante por fuera, bañado generosamente en crema de avellanas Nutella, rodajas de banano fresco y almendras tostadas laminadas.',
    price: '$14.900',
    image: 'https://tse3.mm.bing.net/th/id/OIP.NkrlNe4ZTXyVA3h20cobJAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Antojo',
    tagColor: 'brown'
  },
  {
    id: 5,
    name: 'TIRAMISÚ CLÁSICO',
    description: 'Tradicional postre italiano de capas de bizcocho humedecido en café espresso, crema suave de queso mascarpone y un toque de cacao en polvo.',
    price: '$14.500',
    image: 'https://loremflickr.com/600/600/tiramisu,dessert/all?lock=505',
    tag: 'Popular',
    tagColor: 'amber'
  },
  {
    id: 6,
    name: 'VOLCÁN DE CHOCOLATE CALIENTE',
    description: 'Bizcocho de chocolate horneado con centro líquido y fundido, acompañado de una bola de helado de vainilla y frutos rojos frescos como postre insignia.',
    price: '$15.900',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugueeSHGyeK8GUJnT2H4OBGQZVDayoIAgGJYXWTlNsQ&s=10',
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