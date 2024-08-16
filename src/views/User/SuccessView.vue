<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from "@/stores/user/cart";
const cartStore = useCartStore();
import { onMounted } from 'vue';

onMounted(()=>{
  cartStore.loadCheckout()
 console.log(cartStore.checkout)
})
</script>

<template>  

<UserLayout>
  Success Page
</UserLayout>
</template>
