import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserProductStore = defineStore('user-product', () => {
  state: () => ({
    list: [{
      name: 'test',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,

    }],
    loaded: false
  });
});