<template>
  <div class="todos">
    

    <button v-on:click="logout">Sign Out</button>
    <br>
    <br>
    <button v-on:click="goToDone"> See completed todos</button>
    <br>
    <form @submit="addTodo(name)">
      <input v-model="name" placeholder="Todo" type="text">
      <button type="submit">Add todo</button>
    </form>

    <h2> These are the todos</h2>
    <article v-for="(todo, idx) in todos" :key="idx">
      <Todo v-bind:msg="todo.name" v-bind:idx="idx"/>
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
  data () {
    return {
      todos: [],
      name: '',
      idx: 0
    }
  },
  firestore () {
    return {
      todos: db.collection('todos')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
      this.$router.replace('/')
      })
    },
    addTodo: function(name){
      db.collection('todos').add({name});
    },
    addDone: function(name){
      //delete from todos and add to done
      db.collection('todos').where('name', '==', name).delete();
      db.collection('done').add({name});
    },
    goToDone: function(){
      this.$router.replace('/done')
    }
  }
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
