import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {

    state: () => ({
        items: [
            {
                name: 'test',
                imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
                quantity: 10,
                about: 'testt',
                status: 'open',
                price: 100,
                quantity: 1
            }
        ]
    }),
    getters: {
        summeryPrice(state) {
            return state.item.reduce((acc, item) => {
                return acc = acc + (item.price * item.quantity);
            }, 0);
        }


    },
    actions: {
        addTocart(productData) {
            this.items.push(productData);

        },
        updateQuantiy(index, quantity) {
            this.items[index].quantity = quantity;

        },
        removeItemCart(index) {
            this.items.splice(index, 1);

        }
    }

});