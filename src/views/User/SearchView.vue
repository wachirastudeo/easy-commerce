<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { ref, onMounted, computed,watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from '@/stores/user/product';
import Product from "@/components/Product.vue";

const route = useRoute();
const productStore = useProductStore();
const searchText = ref('');


watch(()=> route.query.q ,(newSearchText)=>{
  searchText.value = route.query.q;
},{immediate:true})

const filterProducts =  computed(()=>{
  return productStore.filterProduct(searchText.value)
})
</script>

<template>
  <UserLayout>
    <div class="text-3lx">
      Search: <b>{{ searchText }}</b>
    </div>
    <Product :products="filterProducts"></Product>
  </UserLayout>
</template>
