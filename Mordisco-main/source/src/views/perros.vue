<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://media.istockphoto.com/id/1059280672/ko/%EC%82%AC%EC%A7%84/%EB%A7%A4%EC%9A%B4-%ED%95%AB%EB%8F%84%EA%B7%B8%EC%99%80-%EA%B0%90%EC%9E%90-%ED%8A%80%EA%B9%80-%EA%B2%A8%EC%9E%90-%ED%9D%B0%EC%83%89-%ED%91%9C%EB%A9%B4%EC%97%90-%EC%A2%85%EC%9D%B4%EC%97%90-%EC%BC%80%EC%B2%A9%EC%9D%98-%EA%B7%BC%EC%A0%91-%EC%B4%AC%EC%98%81.jpg?s=170667a&w=0&k=20&c=Isz93ls9zpkJLKuV10pO1pt3E-kYi2l4u8mrunDTOlI="
      title="Perros Calientes"
      description="Salchicha alemana premium, pan suave al vapor y una explosión de salsas y toppings a tu gusto."
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
    name: 'Perro Sencillo',
    description: 'Salchicha clásica, papas hilo, salsa rosada, mostaza y queso rallado.',
    price: '$10.500',
    image: 'https://tse4.mm.bing.net/th/id/OIP.JVFnu9faivL75x1qmLbwdwHaG2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido'
  },
  {
    id: 2,
    name: 'Perro Ranchero',
    description: 'Salchicha, tocineta, maíz tierno, cebolla crispy y salsa ranchera.',
    price: '$14.900',
    image: 'https://tse1.mm.bing.net/th/id/OIP.VBbu9mynsAAEalTAdJC2qwHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Nuevo'
  },
  {
    id: 3,
    name: 'Perro Jalapeño',
    description: 'Salchicha doble, jalapeños encurtidos, queso cheddar fundido y salsa picante.',
    price: '$15.500',
    image: 'https://tse3.mm.bing.net/th/id/OIP.mcIGw1LGxXDhHcVRceWObgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Picante'
  },
  {
    id: 4,
    name: 'Perro Vegetariano',
    description: 'Salchicha de vegetales, aguacate, tomate cherry y salsa de yogur.',
    price: '$13.500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8bqEFKGkq8sQ8cAN3J4_YlSNyem6SDfTujZ5w-rK3A&s=10',
    tag: 'Vegetariano'
  },
  {
    id: 5,
    name: 'Perro BBQ',
    description: 'Salchicha ahumada bañada en salsa BBQ artesanal, cebolla crispy y queso fundido.',
    price: '$16.500',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=600&auto=format&fit=crop',
    tag: 'Popular'
  },
  {
    id: 6,
    name: 'Perro Especial de la Casa',
    description: 'Doble salchicha alemana, tocineta, queso derretido, papas hilo y piña caramelizada.',
    price: '$19.900',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmaOo7zGwnc-LPQNQNPgqgQ5CHr7xq6NpKt5UhBYduA&s=10',
    tag: 'Especial'
  }
]
</script>