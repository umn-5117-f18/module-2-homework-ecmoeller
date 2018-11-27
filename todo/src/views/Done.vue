<template>
  <div class="done">
    
    <button v-on:click="logout">Sign Out</button>
    <br>
    <br>
    <button v-on:click="goToTodos"> See todos</button>
    <br>

    <h2> All the completed todos</h2>
    <article v-for="(todo, idx) in todosdone" :key="idx">
      <TodoDone v-bind:msg="todo.name"/>
    </article>

  </div>
</template>


<script>
import firebase from 'firebase';
import { db } from '../main.js'
// @ is an alias to /src
import TodoDone from '@/components/TodoDone.vue'
export default {
  name: 'todosdone',
  components: {TodoDone},
  data () {
    return {
      todosdone: []
    }
  },
  firestore () {
    return {
      todosdone: db.collection('done')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
      this.$router.replace('/')
      })
    },
    addTodo: function(name){
      db.collection('todos').add({name})
    },
    goToTodos: function(){
      this.$router.replace('/todos')
    }
  },
}
</script>

<style>
input[type=text] {
    font-size: 16px;
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

button {
    background-color: #e7e7e7; 
    color: black;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor:pointer;
}
</style>