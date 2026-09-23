<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <div class="category-banner hero-home q-mb-xl" style="background-image: url('https://tse2.mm.bing.net/th/id/OIP.y55LPmPZ_qW3jjpPpo_DZAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'); background-size: 100% 100%; background-position: center;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="hero-eyebrow">MORDISCO · BURGERS & MORE</div>
        <div class="text-h3 text-h4-sm text-weight-bold font-title">El antojo tiene nombre.</div>
        <p class="text-subtitle1 q-mt-sm" style="max-width: 620px;">
          Hamburguesas jugosas, ingredientes honestos y mucho sabor. Todo lo que necesitas
          para convertir un día cualquiera en tu día favorito.
        </p>
        <q-btn to="/hamburguesas" unelevated size="lg" class="q-mt-md action-button">
          Explorar menú
        </q-btn>
      </div>
    </div>

    <div class="section-kicker text-center q-mb-sm">Hecho para disfrutar</div>
    <div class="text-h4 font-title text-weight-bold q-mb-lg text-center text-white">Elige tu próximo antojo</div>

    <div class="row q-col-gutter-lg category-grid">
      <div v-for="cat in categorias" :key="cat.to" class="col-12 col-sm-6 col-md-4">
        <router-link :to="cat.to" custom v-slot="{ navigate }">
          <q-card @click="navigate" clickable v-ripple class="product-card category-card text-center">
            <q-img :src="cat.image" :ratio="1" fit="fill" />
            <q-card-section class="category-card__content">
              <q-icon :name="cat.icon" class="category-card__icon" aria-hidden="true" />
              <div class="category-card__name">{{ cat.name }}</div>
            </q-card-section>
          </q-card>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const categorias = [
  { icon: 'lunch_dining', name: 'Hamburguesas', to: '/hamburguesas', image: 'https://tse2.mm.bing.net/th/id/OIP.y55LPmPZ_qW3jjpPpo_DZAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { icon: 'local_offer', name: 'Promociones', to: '/promociones', image: 'https://tse1.mm.bing.net/th/id/OIP.baON7MJUhYfRxEIT-VMiqQHaJR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { icon: 'restaurant', name: 'Perros', to: '/perros', image: 'https://tse4.mm.bing.net/th/id/OIP.JVFnu9faivL75x1qmLbwdwHaG2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { icon: 'local_pizza', name: 'Pizzas', to: '/pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
  { icon: 'local_bar', name: 'Bebidas', to: '/bebidas', image: 'https://entrecopasdeagave.com/wp-content/uploads/bebidas-con-tequila.jpg' },
  { icon: 'cake', name: 'Postres', to: '/postres', image: 'https://tse4.mm.bing.net/th/id/OIP.U6NkhKG8ICoFgxNyzlnehgHaGL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }
]
</script>

<style scoped>
.category-grid {
  max-width: 1180px;
  margin: 0 auto;
}

.category-card {
  min-height: 100%;
}

.category-card__content {
  display: flex;
  min-height: 112px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-top: 3px solid #ff6b2c;
  background: linear-gradient(180deg, #242424 0%, #1a1a1a 100%);
  padding: 16px 12px;
}

.category-card__icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(255, 107, 44, 0.45);
  border-radius: 50%;
  background: rgba(255, 107, 44, 0.12);
  color: #ff6b2c;
  font-size: 28px;
  line-height: 1;
}

.category-card__name {
  color: #ffffff;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.category-card:hover .category-card__icon {
  background: rgba(255, 107, 44, 0.22);
}
</style>
