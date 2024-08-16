<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { reactive } from 'vue';
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

const userFormData = reactive({
  name: '',
  email: '',
  email: '',
  note: ''

});
const payment = ()=>{
  console.log(userFormData)
}
</script>

<template>

  <UserLayout>
    Check out Page
    <div class="flex">
      <section class="flex-auto w-64 bg-base-200">
        <div class="py-2 px-8" > 
          <div
              v-for="form in formData"
              class="form-control w-full"
            >
              <label class="label">
                <span class="label-text">{{ form.name }}</span>
              </label>

              <textarea
                v-if="form.field === 'address'"
                class="textarea textarea-bordered h-24"
                placeholder="Address"
                v-model="userFormData[form.field]"
              ></textarea>
              <input
                v-else
                type="text"
                placeholder="Type here"
                class="input input-bordered input-sm w-full"
                v-model="userFormData[form.field]"
              />
            </div>

            <button  @click="payment" class="btn btn-neutral my-4 w-full  ">ชำระเงิน </button>

          
        </div>



      </section>
      <section class="flex flex-auto w-32 bg-slate-300">Summary</section>
    </div>
  </UserLayout>
</template>
