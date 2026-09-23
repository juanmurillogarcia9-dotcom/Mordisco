<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://tse4.mm.bing.net/th/id/OIP.xxeYi0aSJkBvahfun8P3FAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      title="Postres"
      description="El final dulce perfecto: preparaciones caseras horneadas todos los días en nuestra cocina."
    />

    <div class="row q-col-gutter-lg">
      <div
        v-for="product in productos"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <ProductCard :product="product" />
      </div>
    </div>

  </q-page>
</template>

<script setup>
import CategoryBanner from '../components/CategoryBanner.vue'
import ProductCard from '../components/ProductCard.vue'

const productos = [
  {
    id: 1,
    name: 'Brownie con Helado',
    description: 'Brownie tibio y melcochudo de chocolate amargo, acompañado de una bola de helado artesanal de vainilla, bañado en salsa caliente de chocolate y lluvia de maní.',
    price: '$12.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.BZ9GrxTCoV2ILBWBuvdsxQHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido'
  },
  {
    id: 2,
    name: 'Cheesecake de Maracuyá',
    description: 'Clásica base de galleta crujiente, suave y cremoso relleno de queso crema, cubierto con una capa de reducción de maracuyá natural agridulce y semillas.',
    price: '$13.500',
    image: 'https://tse3.mm.bing.net/th/id/OIP.ruUutaZke4kqnwrN44X8AgHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Nuevo'
  },
  {
    id: 3,
    name: 'Copa de Frutas',
    description: 'Refrescante mezcla de frutas frescas de temporada (fresa, banano, papaya y piña), servidas con un toque de miel de abejas pura y granola crujiente artesanal.',
    price: '$9.900',
    image: 'https://tse3.mm.bing.net/th/id/OIP.73WQq1n9AElA_D6Jz54R1QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Vegetariano'
  },
  {
    id: 4,
    name: 'Waffle con Nutella',
    description: 'Waffle artesanal recién horneado y crocante por fuera, bañado generosamente en crema de avellanas Nutella, rodajas de banano fresco y almendras tostadas laminadas.',
    price: '$14.900',
    image: 'https://tse3.mm.bing.net/th/id/OIP.NkrlNe4ZTXyVA3h20cobJAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 5,
    name: 'Tiramisú Clásico',
    description: 'Tradicional postre italiano de capas de bizcocho humedecido en café espresso, crema suave de queso mascarpone y un toque de cacao en polvo.',
    price: '$14.500',
    image: 'https://loremflickr.com/600/600/tiramisu,dessert/all?lock=505',
    tag: 'Popular'
  },
  {
    id: 6,
    name: 'Volcán de Chocolate Caliente',
    description: 'Bizcocho de chocolate horneado con centro líquido y fundido, acompañado de una bola de helado de vainilla y frutos rojos frescos como postre insignia.',
    price: '$15.900',
    image: 'https://tse4.mm.bing.net/th/id/OIP.fh0-SxntJ073d53adf-TKQHaEs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Especial'
  }
]
</script>