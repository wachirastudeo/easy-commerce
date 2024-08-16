import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  // Using the options API
  state: () => ({
    list: [
      {
        name: 'test',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        quantity: 10,
        about: 'testt',
        status: 'open',
        price: 50,
      },
      {
        name: 'test123',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
        quantity: 10,
        about: 'testt 123',
        status: 'open',
        price: 250,
      },
    ],
    loaded: false,
  }),
  actions: {
    filterProduct(searchText) {
      return this.list.filter(product => product.name.includes(searchText));
    }
  }

});
