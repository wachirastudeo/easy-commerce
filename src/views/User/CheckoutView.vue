<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { reactive } from 'vue';
import { useCartStore } from "@/stores/user/cart";
import { RouterLink } from "vue-router";

const formData = [{
  name: 'Name',
  field: 'name'
}, {
  name: 'Email',
  field: 'email'
},
{
  name: 'Address',
  field: 'address'
}, {
  name: 'Note',
  field: 'note'
},
];

const cartStore = useCartStore();


const userFormData = reactive({
  name: '',
  email: '',
  email: '',
  note: ''

});
const payment = () => {
  console.log(userFormData);
};
</script>

<template>

  <UserLayout>
    Check out Page
    <div class="flex py-3">
      <section class="flex-auto w-64 bg-base-200">
        <div class="py-2 px-8">
          <div v-for="form in formData" class="form-control w-full">
            <label class="label">
              <span class="label-text">{{ form.name }}</span>
            </label>
            <textarea v-if="form.field === 'address'" class="textarea textarea-bordered h-24" placeholder="Address"
              v-model="userFormData[form.field]"></textarea>
            <input v-else type="text" placeholder="Type here" class="input input-bordered input-sm w-full"
              v-model="userFormData[form.field]" />
          </div>
          <button @click="payment" class="btn btn-neutral my-6 w-full  ">ชำระเงิน </button>
        </div>
        
      </section>
      <section class="flex-auto w-32 bg-slate-300 px-2 py-4">
        <div v-for="item in cartStore.items" class="flex py-4 bg-white m-8">
          <div class="flex-1 px-5">
            <img :src="item.imageUrl"  alt="">
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div> <b>{{ item.name }}</b></div>
                <div>จำนวน : {{ item.quantity }}</div>
              </div>

              <div > <RouterLink class="btn btn-neutral" :to="{name:'cart'}"> Edit </RouterLink></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </UserLayout>
</template>
