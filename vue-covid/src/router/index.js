import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/:cityName',
    name: 'City',
    component: ()=>import('../views/City.vue'),
    props:true
  },
  {
    path: '/cityfto/:FromId/:toId',
    name: 'Cityfto',
    component: ()=>import('../views/Cityfto.vue'),
    props:true
  }
]

const router = new VueRouter({
  routes
})

export default router
