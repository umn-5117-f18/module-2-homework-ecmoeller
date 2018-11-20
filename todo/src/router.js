import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from './views/Home.vue'
import Todos from './views/Todos.vue'
import Done from './views/Done.vue'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/done',
      name: 'done',
      component: Done,
      meta: {
        requiresAuth: true
      }
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
    next('/todos')
  } else {
    next()  //Must always reach this case eventually or you get a stack overflow
  }
})

export default router