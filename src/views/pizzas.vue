<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://loremflickr.com/1200/400/pizza,margherita/all?lock=301"
      title="🍕 Pizzas"
      description="Masa artesanal fermentada 24 horas, horneada en piedra y cubierta con ingredientes frescos seleccionados."
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
    name: 'Pizza Margarita',
    description: 'Salsa de tomate casera 100% natural, abundante mozzarella fresca de búfala, hojas de albahaca recién cortada y un hilo de aceite de oliva virgen extra.',
    price: '$26.000',
    image: 'https://tse1.mm.bing.net/th/id/OIP.C-Sb26HYKVUk1Mywhga8KgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido'
  },
  {
    id: 2,
    name: 'Pizza Hawaiana',
    description: 'La combinación perfecta de dulce y salado con jugosos trozos de jamón ahumado, piña asada al horno, queso mozzarella fundido y un toque sutil de orégano.',
    price: '$28.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.zql2AjiuSUhaLOS89QVDzwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Nuevo'
  },
  {
    id: 3,
    name: 'Pizza Diabla',
    description: 'Para los amantes de las emociones fuertes: generosa capa de pepperoni italiano picante, rodajas de jalapeño, salsa diabla especial de la casa y doble mozzarella.',
    price: '$29.900',
    image: 'https://tse1.mm.bing.net/th/id/OIP.wWFudwCfM708VSab8E2n1QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Picante'
  },
  {
    id: 4,
    name: 'Pizza Vegetariana',
    description: 'Fresca y ligera con champiñones silvestres salteados, pimentón tricolor, cebolla morada crujiente, aceitunas negras y hojas de espinaca fresca sobre base de mozzarella.',
    price: '$27.500',
    image: 'https://tse1.explicit.bing.net/th/id/OIP.xUTSJwdmDafG_AjUeVJbwwHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Vegetariano'
  }
]

const recomendacion = {
  name: 'Pizza Cuatro Quesos Especial',
  description: 'Mozzarella, parmesano, gorgonzola y queso crema sobre base artesanal, gratinada al horno de piedra y terminada con miel de abeja.',
  price: '$32.900',
  image: 'https://loremflickr.com/600/600/pizza,cheese/all?lock=306'
}
</script>