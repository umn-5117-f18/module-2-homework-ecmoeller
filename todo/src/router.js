import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from './views/Home.vue'
import Hello from './views/Hello.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '*',      //Catch all not defined routes
      redirect: '/'
    }
  ]
})

router.beforeEach(function(to, from, next) {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record=>record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (!requiresAuth && currentUser) {
    next('/hello')
  } else {
    next()  //Must always reach this case eventually or you get a stack overflow
  }
})

export default router