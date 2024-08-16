<script setup>
import {  RouterView } from 'vue-router'
import { useCartStore } from '@/stores/user/cart';
import { onMounted } from 'vue';

onMounted(()=>{
  useCartStore.loadCart()
})
</script>

<template>
  
  <RouterView />
</template>

