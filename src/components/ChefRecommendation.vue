<template>
  <q-card class="chef-card q-mt-lg" flat>
    <div class="row items-stretch">
      <div class="col-12 col-sm-5">
        <q-img :src="product.image" class="full-height" :ratio="1" style="min-height: 220px;" />
      </div>
      <div class="col-12 col-sm-7">
        <q-card-section>
          <div class="row items-center q-gutter-xs">
            <q-icon name="restaurant_menu" color="warning" size="28px" />
            <span class="text-overline text-weight-bold text-warning">
              Recomendación del chef
            </span>
          </div>
          <div class="text-h5 font-title text-weight-bold q-mt-xs">{{ product.name }}</div>
          <div class="text-body2 text-grey-9 q-mt-sm">{{ product.description }}</div>
          <div class="text-h6 text-weight-bold q-mt-md text-warning">
            {{ product.price }}
          </div>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true }
})
</script>
