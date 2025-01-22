<script setup lang="ts">

</script>

<template>
  <main class="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated">
    <RouterLink to="/about" class="text-6xl font-bold text-white hover:text-gray-200">
      COLOR GRADIENT GENERATOR
    </RouterLink>
  </main>
</template>

<style>
/* Animazione per il gradiente */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Classe personalizzata per lo sfondo animato */
.bg-gradient-animated {
  background: linear-gradient(270deg, #8fed93, #2f8553, #189355, #05593f);
  background-size: 400% 400%;
  animation: gradient-animation 6s ease infinite;
}
</style>
