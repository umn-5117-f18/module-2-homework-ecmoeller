<template>
  <div class="card">
    <label class="container" onclick="return false;"> 
      <button v-on:click="addDone(msg, id, category)">Done </button>
      <router-link :to="{ name: 'todoSum', params: { idx: idx, id: id, title: msg, category: category }}">
        {{msg}} 
      </router-link> 
    </label>
  </div>
</template>

<script>
import { db } from '../main.js'
export default {
  name: 'Todo',
  props: {
    msg: String,
    idx: Number,
    id: String,
    category: String
  },
  methods: {
    addDone: function(name, id, category){
      //delete from todos and add to done
      console.log("Here is id: " + id);
      console.log("Here is name: " + name);


      db.collection('todos').doc(id).delete();
      const createdAt = new Date()
      //TODO THIS MUST BE TESTED
      db.collection('done').add({name, createdAt, category});
      
      
    },
  }
}
</script>

<style>
/* Customize the label (the container) */
.container {
  
  white-space:nowrap;
  overflow:hidden;
  /* display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
 
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
}


</style>
