<template>
  <div class="sign-up">
    <h3>Let's create an account!</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click='signUp'>Sign Up</button>
    <p>or go back to <router-link to="/login">login</router-link></p>
    <button v-on:click='googleSignIn'>Sign in with Google</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import {provider} from '../firebaseConfig'
  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert(err.message)
          }
        )
      },
      googleSignIn: function() {
        firebase.auth().signInWithRedirect(provider).then(
          (result=> {
            console.log("signed in with google")
          })
          .catch(err=>alert(err.message))
        )
      }
    }
  }
</script>

<style scoped>
</style>