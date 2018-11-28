<template>
  <div class="card">
    <label class="container" onclick="return false;"> 
      <button v-on:click="addDone(msg, id)">Done </button>
      <router-link :to="{ name: 'todoSum', params: { idx: idx, id: id, title: msg }}">
        {{msg}} {{idx}}
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
    id: String
  },
  methods: {
    addDone: function(name, id){
      //delete from todos and add to done
      console.log("Here is id: " + id);
      db.collection('todos').doc(id).delete();
      const createdAt = new Date()
      db.collection('done').add({name, createdAt});
    },
  }
}
</script>

<style>
/* Customize the label (the container) */
.container {
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
