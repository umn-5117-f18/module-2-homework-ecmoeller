<template>
  <div class="todos">
    

    <button v-on:click="logout">Sign Out</button>
    <br>
    <input type="text">
    <button v-on:click="addTodo">Add todo</button>

    <h2> These are the todos</h2>

    <article v-for="item in ['Education', 'Work Experience', 'Skills']" :key="item">
      <Todo v-bind:msg="item"/>
    </article>

  </div>
</template>


<script>
import firebase from 'firebase';

// @ is an alias to /src
import Todo from '@/components/Todo.vue'
export default {
  name: 'todos',
  components: {Todo},
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
      this.$router.replace('/')
      })
    },
    addTodo: function(){


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
