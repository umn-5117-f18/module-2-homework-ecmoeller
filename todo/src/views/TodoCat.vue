<template>
  <div class="todoCat">
    <h2>This is a todo category page</h2>
    <button v-on:click="logout">Sign Out</button>
    <br> <br>
    <button v-on:click="goToDone"> See completed todos</button>
    <br>  <br>

    <input v-model="name" placeholder="Todo" type="text">
    <button v-on:click="addTodo(name)">Add todo</button>

    <h2> These are the todos</h2>
    <article v-for="(todo, idx) in todosPerCat" :key="idx">
      <Todo v-bind:msg="todo.name" v-bind:idx="idx" v-bind:id="todo.id" v-bind:category="$route.params.category"/>
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
      todosPerCat: db.collection('todos').where("category", "==", this.$route.params.category),
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
      this.$router.replace('/')
      })
    },
    addTodo: function(name){
      const createdAt = new Date()

        db.collection("todos").add({
            name: name,
            createdAt: createdAt,
            category: this.$route.params.category
        })

      
    },
    goToDone: function(){
      //this will need to be changed if you finish done cat
      this.$router.replace('/done')
    }
  }
}

</script>

<style>
</style>