import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'ContentLayout'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        layout: 'ContentLayout'
      }
    }
  ]
})

export default router
