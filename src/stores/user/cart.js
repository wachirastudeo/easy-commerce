import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [

        ]
    }),
    actions: {
        loadCart() {
            const previousCart = localStorage.getItem('cart-data');
            if (previousCart) {
                this.items = JSON.parse(previousCart);
            }
        },
        addTocart(productData) {
            productData.quantity = 1;

            this.items.push(productData);
            localStorage.setItem('cart-data', JSON.stringify(this.items));

        },
        updateQuantity(index, quantity) {
            this.items[index].quantity = parseInt(quantity, 10);
            localStorage.setItem('cart-data', JSON.stringify(this.items));
        },
        removeItemCart(index) {
            this.items.splice(index, 1);
            localStorage.setItem('cart-data', JSON.stringify(this.items));

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
