<template>
  <div class="todoSum">

    <h2 v-if="!isHidden"> {{$route.params.title}} {{$route.params.id}} </h2>
    <button v-if="!isHidden" v-on:click="showEdit()">Edit Todo</button>


    <!-- <form @submit="editTodo($route.params.id, newTodo)" v-if="isHidden">
      <input v-model="newTodo" placeholder="todo" type="text">
      <button type="submit" >Submit</button>
    </form> -->
    

    <div v-if="isHidden">
      <input v-model="newTodo" placeholder="todo" type="text">
      <button v-on:click="editTodo($route.params.id, newTodo)">Submit</button>
    </div>
    
  </div>
</template>

<script>
import { db } from '../main.js'
export default {
  name: 'Todo',
  props: {
      title: String,
      id: Number
    
  },
  data () {
    return {
        isHidden: false
    };
  },
  methods: {
    showEdit: function(){
        console.log("In edit");
        if( !this.isHidden){
            this.isHidden = true;
        }else{
            this.isHidden = false;
        }
    },
    editTodo: function(idx, newTodo){
        console.log("In edit");
        if( !this.isHidden){
            this.isHidden = true;
        }else{
            this.isHidden = false;
        }
    } 
  }
}

</script>

<style>
</style>