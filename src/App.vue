<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="flex pt-7 space-x-4 w-full mz-auto container-fluid p-4 ">
      <nav class="flex space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

