import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/hello-world',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
