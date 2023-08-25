import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import GamePage from '../pages/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  // Something like the following if you want to use containers...
  // {
  //   path: '/',
  //   name: 'home',
  //   component: DefaultContainer,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       component: HomePage
  //     }
  //   ]
  // },
  // {
  //   path: '/game',
  //   name: 'game',
  //   component: GameContainer,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Game',
  //       component: GamePage
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  }
]

const router = new VueRouter({
  routes
})

export default router
