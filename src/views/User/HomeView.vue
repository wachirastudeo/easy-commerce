<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
</script>

<template>

  <UserLayout>
    <div class="hero bg-base-200 h-96">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Hello Easy Shop
          </p>
        </div>
      </div>
    </div>
    <!-- product -->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
      <div v-for="item in [1,2,3,4,5,6,7,8]" class="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  </UserLayout>
</template>
