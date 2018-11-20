<template>
  <div class="home">
    This is Emily's Todo app
    <button v-on:click='googleSignIn'>Sign in with Google</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'
import {provider} from '../firebaseConfig'
export default {
  name: 'home',
  components: {},
  methods: {
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