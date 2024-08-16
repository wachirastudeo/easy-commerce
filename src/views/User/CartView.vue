<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";
import { useCartStore } from "@/stores/user/cart";

const cartStore = useCartStore();
</script>

<template>
  <UserLayout>
    <h1 class="text-2xl font-bold m-4">Shopping Cart</h1>


    <div class="flex my-4">
      <div class="flex-auto bg-base-200 w-64 p-4">
        <div v-if="cartStore.items.length === 0" :key="index">
          Cart is empty
        </div>
        <div v-else class="flex " v-for="(item, index) in cartStore.items">
          <div class="flex-1 w-full px-10">
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
          </div>
          <div class="flex-1">
            <div class="flex relative flex-col justify-between h-full">

              <div class="grid grid-cols-2">
                <div>
                  <div><b>{{ item.name }}</b></div>
                  <div>{{ item.about }}</div>
                  <div>{{ item.price }}</div>
                </div>
                <div>
                  <select v-model="item.quantity" class="w-1/2 p-4">
                    <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>

                  </select>
                </div>
                <div @click="cartStore.removeItemCart(index)" class="absolute top-0 right-0">
                  <Close></Close>
                </div>
              </div>
              <div><b>in Stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto bg-base-300 w-32 p-4">
        <div class="text-xl font-bold">Summery</div>
        <div class="m-4 divide-y ">
          <div class="flex justify-between p-2  ">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>100</div>

          </div>
          <div class="flex justify-between p-2 ">
            <div>ค่าส่ง</div>
            <div>0</div>

          </div>
          <div class="flex justify-between p-2 ">
            <div>รวมราคาสินค้าทั้งหมด</div>
            <div>100</div>

          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
