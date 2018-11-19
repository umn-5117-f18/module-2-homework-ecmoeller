<template>
  <div class="login">
    <h3>Log In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click='login'>Submit</button>
    <p> You don't have an account? You can <router-link to="/signup">create one</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert(err.message)
          }
        )
      }
    }
  }
</script>

<style scoped>
</style>