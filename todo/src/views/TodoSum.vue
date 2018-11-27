<template>
  <div class="todoSum">
    <h2>  hey hey  </h2>
  </div>
</template>

<script>
import { db } from '../main.js'
export default {
  name: 'Todo',
  props: {
    
  },
  methods: {
    addDone: function(name){
      //delete from todos and add to done
      console.log("In adding done");
      db.collection('todos').where('name', '==', name).delete();
      db.collection('done').add({name});
    }
  }
}

</script>

<style>
</style>