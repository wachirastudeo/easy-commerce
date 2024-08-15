<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { useProductStore } from '@/stores/user/product';

const productStore = useProductStore();
</script>

<template>
  <UserLayout>
    <div class="hero bg-base-200 h-96">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">Hello Easy Shop</p>
        </div>
      </div>
    </div>
    
    <!-- product -->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
      <div v-for="product in productStore.list" :key="product.name" class="card bg-base-100 w-full shadow-xl">
        <figure>
          <img :src="product.imageUrl" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.about }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  </UserLayout>
</template>

