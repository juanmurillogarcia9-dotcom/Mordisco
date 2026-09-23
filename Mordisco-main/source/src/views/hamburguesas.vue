<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://tse2.mm.bing.net/th/id/OIP.y55LPmPZ_qW3jjpPpo_DZAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      title="Hamburguesas"
      description="Carne 100% de res, pan brioche horneado y toppings frescos. Nuestras hamburguesas se preparan al momento, a la parrilla."
    />

    <!-- Contenedor de la grilla de productos forzado a 3 columnas -->
    <div class="row q-col-gutter-md q-col-gutter-lg-lg justify-start">
      <div
        v-for="product in productos"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 flex"
      >
        <ProductCard :product="product" class="full-width" />
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
    name: 'Clásica Criolla',
    description: 'Jugosa carne de res a la parrilla, queso cheddar fundido, lechuga crujiente, tomate fresco, cebolla morada en plumas y nuestra salsa especial de la casa en pan brioche.',
    price: '$18.500',
    image: 'https://tse4.mm.bing.net/th/id/OIP.DcPAE-I-LH9LN5bzWdxwXQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido'
  },
  {
    id: 2,
    name: 'BBQ Bacon',
    description: 'Doble carne de res, doble porción de tocineta crocante, queso cheddar fundido, aros de cebolla y salsa BBQ ahumada artesanal en pan brioche tostado.',
    price: '$24.900',
    image: 'https://thumbs.dreamstime.com/b/hamburguesa-del-bbq-con-tocino-y-cebollas-71619920.jpg',
    tag: 'Nuevo'
  },
  {
    id: 3,
    name: 'Jalapeño Fire',
    description: 'Carne de res seleccionada, queso pepper jack fundido, jalapeños frescos en rodajas, lechuga y mayonesa picante especial para los amantes del buen sabor picante.',
    price: '$21.500',
    image: 'https://tse3.mm.bing.net/th/id/OIP.8TU29P8tG_Sbeekq-RpTpwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Picante'
  },
  {
    id: 4,
    name: 'Veggie Garden',
    description: 'Medallón artesanal a base de garbanzo y vegetales frescos, queso mozzarella fundido, láminas de aguacate hass, rúgula fresca y aderezo de yogurt en pan integral.',
    price: '$19.900',
    image: 'https://tse2.mm.bing.net/th/id/OIP.5Ijyy8Oq-Ri70kMPiL2sYwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Vegetariano'
  },
  {
    id: 5,
    name: 'Truffle Mushroom',
    description: 'Carne de res a la parrilla bañada en crema de champiñones silvestres salteados al vino blanco, queso suizo fundido y toque de aceite de trufa en pan artesanal.',
    price: '$27.500',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    tag: 'Chef Special'
  },
  {
    id: 6,
    name: 'Mega Crunch',
    description: 'Doble carne jugosa, doble cheddar, bastones de mozzarella apanados crujientes, tocineta ahumada y salsa tártara de la casa.',
    price: '$25.000',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
    tag: 'Recomendado'
  }
]
</script>