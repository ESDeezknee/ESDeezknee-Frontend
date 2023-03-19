import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChallengeView from '../views/ChallengeView.vue'
import ActiveChallengesView from '../views/ActiveChallenges.vue' 
import RedemptionView from '../views/RedemptionView.vue'
import CreateGroupView from '../views/CreateGroupView.vue'
import InputGroupView from '../views/InputGroupView.vue'  


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: ChallengeView
    },
    {
      path: '/active-challenges',
      name: 'active-challenges',
      component: ActiveChallengesView
    },
    {
      path: '/redemption',
      name: 'redemption',
      component: RedemptionView
    },
    {
      path: '/create-group',
      name: 'create-group',
      component:CreateGroupView
    },
    {
      path: '/input-group',
      name: 'input-group',
      component: () => import('../views/InputGroupView.vue')
    }
  ]
})

export default router
