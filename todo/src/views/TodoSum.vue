<template>
  <div class="todoSum">

    <button v-on:click="logout">Sign Out</button>
    <br>
    <br>

    <h2 v-if="!isHidden"> {{todo}} </h2>
    <button v-if="!isHidden && !isHidden2" v-on:click="addDone($route.params.title, $route.params.id, $route.params.category)">Done </button>
    <br> 
    <br>
    <button v-if="!isHidden && !isHidden2" v-on:click="showEdit()">Edit Todo</button>
    <br>
    <br>
    <button v-if="!isHidden && !isHidden2" v-on:click="showCategory()">Edit category for todo</button>


    <div v-if="isHidden">
      <input v-model="newTodo" :placeholder="todo" type="text">
      <button v-on:click="editTodo($route.params.id, newTodo)">Submit</button>
    </div>

    <div v-if="isHidden2">
      <input v-model="newCategory" :placeholder="category" type="text">
      <button v-on:click="editCategory($route.params.id, newCategory)">Submit</button>
    </div>
    
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main.js'
export default {
  name: 'Todo',
  props: {
      title: String,
      id: String,
      idx: String,
      category: String
    
  },
  data () {
    return {
        isHidden: false,
        isHidden2: false,
        newTodo: '',
        todo: this.$route.params.title //May not need this
    };
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
        this.$router.replace('/')
      })
    },
    showEdit: function(){
        this.isHidden = true;
        
    },
    showCategory: function(){
        console.log("In show category");
        this.isHidden2 = true;
    },
    editTodo: function(id, newTodo){
        const createdAt = new Date()
        db.collection('todos').doc(id).update({name: newTodo, createdAt: createdAt});
        this.isHidden = false;
        this.todo = newTodo;
    },
    editCategory: function(id, newCat){
        db.collection('todos').doc(id).update({category: newCat});
        this.isHidden2 = false;

    },
    addDone: function(name, id, category){
      //delete from todos and add to done
      console.log("Here is id: " + id);
      const createdAt = new Date()
      db.collection('todos').doc(id).delete();
      db.collection('done').add({name, createdAt, category});
      this.$router.replace('/done')
    },
  }
}

</script>

<style>
h2 {
    width: 1000px;
    word-wrap: break-word;
}
</style>