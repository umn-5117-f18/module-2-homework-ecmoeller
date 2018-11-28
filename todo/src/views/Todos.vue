<template>
  <div class="todos">
    
    <button v-on:click="logout">Sign Out</button>
    <br> <br>
    <button v-on:click="goToDone"> See completed todos</button>
    <br>  <br>
    <input v-model="catName" placeholder="Category" type="text">
    <button v-on:click="addCategory(catName)"> Add category</button>
    <br> <br>

    <input v-model="name" placeholder="Todo" type="text">
    <button v-on:click="addTodo(name)">Add todo</button>

    <h2> These are the categories</h2>
    <article v-for="(cat, i) in categories" :key="i">
      
      <button v-on:click="deleteCategory(cat.id, cat.name)">Delete </button>
      <router-link :to="{ name: 'todoCat', params: { idx: i, id: cat.id, category: cat.name }}">
        {{cat.name}} 
      </router-link>

    </article>

    <h2> These are the todos</h2>
    <article v-for="(todo, idx) in todos" :key="idx">
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
  data () {
    return {
      todos: [],
      categories: [],
      name: '',
      catName: '',
      idx: 0,
      i: 0
    }
  },
  firestore () {
    return {
      todos: db.collection('todos').orderBy('createdAt'),
      categories: db.collection('categories')
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
      db.collection('todos').add({name, createdAt});
    },
    goToDone: function(){
      this.$router.replace('/done')
    },
    addCategory: function(name){
      db.collection('categories').add({name});
    },
    deleteCategory: function(id, category){
      console.log("Deleting a category" + category);
      db.collection('categories').doc(id).delete();

      //have to delete cateogory in the todos category field
      // db.collection('todos').where("category", "==", category).update({
      //   category: firebase.firestore.FieldValue.delete()
      // });

      db.collection('todos').doc(id).update({category: ''});

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
