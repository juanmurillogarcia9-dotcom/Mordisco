<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://entrecopasdeagave.com/wp-content/uploads/bebidas-con-tequila.jpg"
      title="Bebidas"
      description="Refrescantes, naturales y heladas. La bebida perfecta para acompañar cualquiera de nuestros platos."
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
    name: 'Limonada de Coco',
    description: 'Limonada natural batida con crema de coco artesanal, zumo de limón fresco, leche condensada y hielo triturado. Tamaño grande (16 oz).',
    price: '$8.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.xnI9xjSbK6ZSjR0R_6PDcAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido'
  },
  {
    id: 2,
    name: 'Malteada de Fresa',
    description: 'Cremoso helado artesanal de fresa, leche entera deslactosada, generosa capa de crema chantilly, jarabe de frutos rojos y cereza. 14 oz.',
    price: '$11.500',
    image: 'https://th.bing.com/th/id/OIP.qOS2THxmgmYmipeX96leswHaHa?r=0&o=7&rm=3&rs=1&pid=ImgDetMain',
    tag: 'Nuevo'
  },
  {
    id: 3,
    name: 'Gaseosa 400ml',
    description: 'Bebida carbonatada bien fría de 400 ml. Elige entre tus opciones favoritas: Coca-Cola tradicional, Sprite refrescante o Fanta naranja.',
    price: '$5.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.halAh_iWZQutrT-2FakH1AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 4,
    name: 'Jugo Verde Detox',
    description: 'Mezcla depurativa 100% natural con espinaca fresca, manzana verde crujiente, apio orgánico, toque de limón y jengibre. Sin azúcar añadida (16 oz).',
    price: '$9.000',
    image: 'https://th.bing.com/th/id/R.99cdc0dd219f8707622c89bc3f1bcd03?rik=YCbgvoL2VfrASg&riu=http%3a%2f%2fcdn.kiwilimon.com%2frecetaimagen%2f20472%2f14858.jpg&ehk=wCmDFdMS0YIrD4Cbd6JSw3GHVuhWnFabX9zz%2f9J7miY%3d&risl=&pid=ImgRaw&r=0',
    tag: 'Vegetariano'
  },
  {
    id: 5,
    name: 'Jugo Natural de Maracuyá',
    description: 'Refrescante jugo natural de maracuyá en agua o leche, preparado al momento con fruta fresca seleccionada y un toque justo de dulzor (16 oz).',
    price: '$7.500',
    image: 'https://tse2.mm.bing.net/th/id/OIP.BHQSRss16FQDxe04glWKlgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Popular'
  },
 {
    id: 6,
    name: 'Granizado de Café Moka',
    description: 'Bebida fría a base de café espresso recién extraído, leche, hielo frappé y un toque de chocolate artesanal coronada con crema.',
    price: '$10.900',
    image: 'https://loremflickr.com/600/600/coffee,frappe/all?lock=406',
    tag: 'Especial'
  }
]
</script>