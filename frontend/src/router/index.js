import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import LandingPage from '../components/LandingPage.vue'

const routes = [
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'Signup', component: SignupPage },
  { path: '/home', name: 'Landing', component: LandingPage, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authUser = localStorage.getItem('authUser')

  if (to.meta.requiresAuth) {
    if (!authUser) {
      next('/login')
    } else {
      next()
    }
  } else if ((to.path === '/login' || to.path === '/signup')) {
    if (authUser) {
      next('/home')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router 