import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [
            {
                name: 'test',
                imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
                quantity: 1,
                about: 'test description',
                status: 'open',
                price: 100
            }
        ]
    }),
    actions: {
        addTocart(productData) {
            productData.quantity = 1;

            this.items.push(productData);

        },
        updateQuantity(index, quantity) {
            this.items[index].quantity = parseInt(quantity, 10); // Ensure quantity is an integer
        },
        removeItemCart(index) {
            this.items.splice(index, 1);
        }
    },
    getters: {
        summaryQuantity: (state) => {
            return state.items.reduce((total, item) => total + item.quantity, 0);
        },
        summaryPrice: (state) => {
            return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    }
});
