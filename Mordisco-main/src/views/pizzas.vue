<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white">
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3);">
      <div class="q-pa-xl">
        <div class="text-h3 text-weight-bold text-orange q-mb-sm">🍕 PIZZAS</div>
        <p class="text-grey-4 text-subtitle1" style="max-width: 800px;">
          Masa artesanal fermentada 24 horas, horneada en piedra y cubierta con ingredientes frescos seleccionados.
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
    name: 'PIZZA MARGARITA',
    description: 'Salsa de tomate casera 100% natural, abundante mozzarella fresca de búfala, hojas de albahaca y aceite de oliva.',
    price: '$26.000',
    image: 'https://tse1.mm.bing.net/th/id/OIP.C-Sb26HYKVUk1Mywhga8KgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Más pedido',
    tagColor: 'orange'
  },
  {
    id: 2,
    name: 'PIZZA HAWAIANA',
    description: 'La combinación perfecta de dulce y salado con jugosos trozos de jamón ahumado, piña asada al horno y mozzarella.',
    price: '$28.500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.zql2AjiuSUhaLOS89QVDzwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Nuevo',
    tagColor: 'green'
  },
  {
    id: 3,
    name: 'PIZZA DIABLA',
    description: 'Para los amantes de las emociones fuertes: pepperoni italiano picante, jalapeños, salsa diabla y doble mozzarella.',
    price: '$29.900',
    image: 'https://tse1.mm.bing.net/th/id/OIP.wWFudwCfM708VSab8E2n1QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Picante',
    tagColor: 'red'
  },
  {
    id: 4,
    name: 'PIZZA VEGETARIANA',
    description: 'Champiñones silvestres salteados, pimentón tricolor, cebolla morada, aceitunas negras y espinaca fresca.',
    price: '$27.500',
    image: 'https://tse1.explicit.bing.net/th/id/OIP.xUTSJwdmDafG_AjUeVJbwwHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Vegetariano',
    tagColor: 'teal'
  },
  {
    id: 5,
    name: 'PIZZA POLLO CON CHAMPIÑONES',
    description: 'Trocitos de pollo jugoso marinado a las finas hierbas, champiñones frescos y capa generosa de queso mozzarella.',
    price: '$30.000',
    image: 'https://tse4.mm.bing.net/th/id/OIP.jStpibzIqP_sjzzf5CilOgHaE0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tag: 'Popular',
    tagColor: 'amber'
  },
  {
    id: 6,
    name: 'PIZZA CUATRO QUESOS',
    description: 'Mozzarella, parmesano, gorgonzola y queso crema sobre base artesanal, gratinada al horno de piedra.',
    price: '$32.900',
    image: 'https://tse4.mm.bing.net/th/id/OIP.Iykr8T7vpuz5N--euBL0uAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
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