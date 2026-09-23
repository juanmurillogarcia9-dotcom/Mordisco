<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white">
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3);">
      <div class="q-pa-xl">
        <div class="text-h3 text-weight-bold text-orange q-mb-sm">🍹 BEBIDAS</div>
        <p class="text-grey-4 text-subtitle1" style="max-width: 800px;">
          Refrescantes, naturales y heladas. La bebida perfecta para acompañar cualquiera de nuestros platos.
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
    name: 'LIMONADA DE COCO',
    description: 'Limonada natural batida con crema de coco artesanal, zumo de limón fresco, leche condensada y hielo triturado. Tamaño grande (16 oz).',
    price: '$8.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.xnI9xjSbK6ZSjR0R_6PDcAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido',
    tagColor: 'orange'
  },
  {
    id: 2,
    name: 'MALTEADA DE FRESA',
    description: 'Cremoso helado artesanal de fresa, leche entera deslactosada, generosa capa de crema chantilly, jarabe de frutos rojos y cereza. 14 oz.',
    price: '$11.500',
    image: 'https://th.bing.com/th/id/OIP.qOS2THxmgmYmipeX96leswHaHa?r=0&o=7&rm=3&rs=1&pid=ImgDetMain',
    tag: 'Nuevo',
    tagColor: 'green'
  },
  {
    id: 3,
    name: 'GASEOSA 400ML',
    description: 'Bebida carbonatada bien fría de 400 ml. Elige entre tus opciones favoritas: Coca-Cola tradicional, Sprite refrescante o Fanta naranja.',
    price: '$5.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.halAh_iWZQutrT-2FakH1AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Clásico',
    tagColor: 'blue'
  },
  {
    id: 4,
    name: 'JUGO VERDE DETOX',
    description: 'Mezcla depurativa 100% natural con espinaca fresca, manzana verde crujiente, apio orgánico, toque de limón y jengibre. Sin azúcar añadida (16 oz).',
    price: '$9.000',
    image: 'https://th.bing.com/th/id/R.99cdc0dd219f8707622c89bc3f1bcd03?rik=YCbgvoL2VfrASg&riu=http%3a%2f%2fcdn.kiwilimon.com%2frecetaimagen%2f20472%2f14858.jpg&ehk=wCmDFdMS0YIrD4Cbd6JSw3GHVuhWnFabX9zz%2f9J7miY%3d&risl=&pid=ImgRaw&r=0',
    tag: 'Vegetariano',
    tagColor: 'teal'
  },
  {
    id: 5,
    name: 'JUGO NATURAL DE MARACUYÁ',
    description: 'Refrescante jugo natural de maracuyá en agua o leche, preparado al momento con fruta fresca seleccionada y un toque justo de dulzor (16 oz).',
    price: '$7.500',
    image: 'https://loremflickr.com/600/600/juice,passionfruit/all?lock=405',
    tag: 'Popular',
    tagColor: 'amber'
  },
  {
    id: 6,
    name: 'VOLCÁN DE CHOCOLATE HELADO',
    description: 'Malteada artesanal de chocolate belga con crema batida, salsa de chocolate caliente y virutas de galleta.',
    price: '$13.900',
    image: 'https://loremflickr.com/600/600/chocolate,milkshake/all?lock=406',
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