<template>
  <div class="todoSum">

    <button v-on:click="logout">Sign Out</button>
    <br>
    <br>

    <h2 v-if="!isHidden"> {{todo}} </h2>
    <button v-if="!isHidden" v-on:click="addDone(todo, $route.params.id)">Done </button>
    <br> 
    <br>
    <button v-if="!isHidden" v-on:click="showEdit()">Edit Todo</button>


    <div v-if="isHidden">
      <input v-model="newTodo" :placeholder="todo" type="text">
      <button v-on:click="editTodo($route.params.id, newTodo)">Submit</button>
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
      idx: String
    
  },
  data () {
    return {
        isHidden: false,
        newTodo: '',
        todo: this.$route.params.title
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
    editTodo: function(id, newTodo){
        const createdAt = new Date()
        db.collection('todos').doc(id).update({name: newTodo, createdAt: createdAt});
        console.log("editing");
        this.isHidden = false;
        this.todo = newTodo;
    },
    addDone: function(name, id){
      //delete from todos and add to done
      console.log("Here is id: " + id);
      const createdAt = new Date()
      db.collection('todos').doc(id).delete();
      db.collection('done').add({name, createdAt});
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