<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";
</script>

<template>
  <UserLayout>
    <h1 class="text-2xl font-bold m-4">Shopping Cart</h1>

    <div class="flex my-4">
      <div class="flex-auto bg-base-200 w-64 p-4">

        <div class="flex">
          <div class="flex-1 w-full px-10">
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
          </div>
          <div class="flex-1">
            <div class="flex relative flex-col justify-between h-full">

              <div class="grid grid-cols-2">
                <div>
                  <div><b>Product</b></div>
                  <div>juset product</div>
                  <div>100</div>
                </div>
                <div>
                  <select class="w-1/2 p-4">
                    <option v-for="quantity in [1,2,3,4,5]">{{ quantity }}</option>
                    
                  </select>
                </div>
                <div class="absolute top-0 right-0">
                  <Close></Close>
                </div>
              </div>
              <div><b>in Stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto bg-base-300 w-32 p-4">Summery</div>
    </div>
  </UserLayout>
</template>
