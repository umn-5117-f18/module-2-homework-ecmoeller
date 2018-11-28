<template>
  <div class="todoCat">
    <h2>This is a todo category page</h2>
    <button v-on:click="logout">Sign Out</button>
    <br> <br>
    <button v-on:click="goToDone"> See completed todos</button>
    <br>  <br>

    <input v-model="name" placeholder="Todo" type="text">
    <button v-on:click="addTodo(name)">Add todo</button>

    <h2> These are the todos</h2>
    <article v-for="(todo, idx) in todos" :key="idx">
      <Todo v-bind:msg="todo.name" v-bind:idx="idx" v-bind:id="todo.id"/>
    </article>
  </div>
</template>

<script>

</script>

<style>
</style>