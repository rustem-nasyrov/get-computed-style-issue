<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h1 class="test-title" ref="titleRef">Test</h1>
  </div>
</template>

<script setup>
  import { shallowRef } from 'vue';
  import useTest from '../composables/index';

  const titleRef = shallowRef();
  useTest(titleRef)
</script>

<style scoped>
  .test-title {
    color: deeppink;
  }
</style>
