import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/User/HomeView.vue';
import ProfileView from '@/views/User/ProfileView.vue';
import SearchView from '@/views/User/SearchView.vue';
import CartView from '@/views/User/CartView.vue';
import CheckoutView from '@/views/User/CheckoutView.vue';
import SuccessView from '@/views/User/SuccessView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },

  ]
});

export default router;
