<template>
  <div
    class="category-banner q-mb-lg"
    :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
  >
    <div class="banner-overlay"></div>
    <div class="banner-content">
      <div class="text-h3 text-weight-bold font-title">{{ title }}</div>
      <div class="text-subtitle1 q-mt-xs" style="max-width: 620px;">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>
