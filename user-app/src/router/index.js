import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AutoView from '../views/AutoView.vue'
import ModeliView from '../views/ModeliView.vue'
import Narudzbina from '../views/Narudzbina'
import LoginView from '../views/LoginView'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/krejiraj-narudzbinu',
    name: 'Narudzbina',
    component: Narudzbina
  },  

  {
    path: '/auto/:id',
    name: 'AutoView',
    component: AutoView
  },

  {
    path: '/modeli',
    name: 'Modeli',
    component: ModeliView
  },{
    path: '/login',
    name: 'Login',
    component: LoginView
  },  
  {
    path: '/register',
    name: 'Register',
    component: Register
  },  
  {
    path: '/automobili',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AutomobiliView.vue')
    }
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
