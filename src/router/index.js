import { createRouter, createWebHistory } from 'vue-router';


import AdminLogin from '@/views/admin/LoginView.vue';
import AdminDashboard from '@/views/admin/DashboardView.vue';


import AdminProductList from '@/views/admin/product/ListView.vue';
import AdminProductUpdate from '@/views/admin/product/UpdateView.vue';


import Home from '@/views/User/HomeView.vue';
import Search from '@/views/User/SearchView.vue';
import Profile from '@/views/User/ProfileView.vue';
import Success from '@/views/User/SuccessView.vue';
import Checkout from '@/views/User/CheckoutView.vue';
import Cart from '@/views/User/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    }, {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard
    }, {
      path: '/admin/products',
      name: 'admin-products',
      component: AdminProductList
    }, {
      path: '/admin/products/create',
      name: 'admin-products-create',
      component: AdminProductUpdate
    },

  ]
});

export default router;