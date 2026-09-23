<template>
  <q-page class="q-pa-md q-pa-lg-xl bg-dark text-white flex flex-center column">
    <!-- Banner de Bienvenida -->
    <div class="q-mb-xl rounded-borders overflow-hidden relative-position shadow-15 text-center q-pa-xl" style="background: linear-gradient(135deg, #1f1f1f 0%, #121212 100%); border: 1px solid rgba(255, 152, 0, 0.3); max-width: 900px; width: 100%;">
      <div class="text-h2 text-weight-bold text-orange q-mb-md">🍔 MORDISCO</div>
      <p class="text-grey-4 text-subtitle1 q-mb-lg">
        El mejor sabor artesanal, rápido y directo a tu mesa. Explora nuestro menú, descubre nuestras ofertas o conoce más sobre nosotros.
      </p>

      <!-- Botones principales solicitados: Promociones y Nosotros -->
      <div class="row q-gutter-md justify-center">
        <q-btn
          to="/promociones"
          color="orange"
          text-color="dark"
          icon="local_fire_department"
          label="Ver Promociones"
          size="lg"
          unelevated
          class="text-weight-bold q-px-lg"
        />
        <q-btn
          to="/nosotros"
          outline
          color="orange"
          label="Sobre Nosotros"
          size="lg"
          class="text-weight-bold q-px-lg text-white"
        />
      </div>
    </div>

    <!-- Accesos rápidos a las categorías -->
    <div class="text-h5 text-weight-bold text-orange q-mb-md">Nuestras Categorías</div>
    <div class="row q-col-gutter-md justify-center" style="max-width: 900px;">
      <div class="col-6 col-sm-4">
        <q-btn to="/hamburguesas" class="full-width bg-grey-10 text-white q-py-md" unelevated style="border: 1px solid rgba(255,255,255,0.15);">
          Hamburguesas
        </q-btn>
      </div>
      <div class="col-6 col-sm-4">
        <q-btn to="/perros" class="full-width bg-grey-10 text-white q-py-md" unelevated style="border: 1px solid rgba(255,255,255,0.15);">
          Perros
        </q-btn>
      </div>
      <div class="col-6 col-sm-4">
        <q-btn to="/pizzas" class="full-width bg-grey-10 text-white q-py-md" unelevated style="border: 1px solid rgba(255,255,255,0.15);">
          Pizzas
        </q-btn>
      </div>
      <div class="col-6 col-sm-4">
        <q-btn to="/bebidas" class="full-width bg-grey-10 text-white q-py-md" unelevated style="border: 1px solid rgba(255,255,255,0.15);">
          Bebidas
        </q-btn>
      </div>
      <div class="col-6 col-sm-4">
        <q-btn to="/postres" class="full-width bg-grey-10 text-white q-py-md" unelevated style="border: 1px solid rgba(255,255,255,0.15);">
          Postres
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// Vista de inicio limpia con accesos directos
</script>

<style scoped>
q-btn {
  transition: transform 0.2s ease;
}
q-btn:hover {
  transform: translateY(-3px);
}
</style>