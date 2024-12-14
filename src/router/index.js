import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeInsider from '../pages/HomeInsider.vue'

// gsap
import { gsap } from "gsap";

const routes = [
  {
    path: '/',
    redirect: '/insider'
  },
  {
    path: '/insider',
    name: 'HomeInsider',
    component: HomeInsider
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
