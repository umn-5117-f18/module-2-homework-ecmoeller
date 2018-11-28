<template>
  <div class="doneCat">
    <h2>Completed todos for {{$route.params.category}}</h2>
    <button v-on:click="logout">Sign Out</button>
    <br> <br>

    <h2> These are the completed todos</h2>
    <article v-for="(todo, idx) in todosPerCat" :key="idx">
      <Todo v-bind:msg="todo.name" v-bind:idx="idx" v-bind:id="todo.id"/>
    </article>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main.js'
// @ is an alias to /src
import Todo from '@/components/Todo.vue'
export default {
  name: 'todos',
  components: {Todo},
  props: {
      category: String,
      id: String,
      idx: String
    
  },
  data () {
    return {
      todosPerCat: [],
      name: '',
      catName: '',
    }
  },
  firestore () {
    return {
      todosPerCat: db.collection('done').where("category", "==", this.$route.params.category),
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
      this.$router.replace('/')
      })
    },
  }
}

</script>

<style>
</style>