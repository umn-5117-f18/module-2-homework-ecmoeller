<template>
  <div class="hello">
    Welcome logged in user.
    <button v-on:click="logout">Sign Out</button>

  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'hello',
  components: {},
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=> {
      this.$router.replace('/')
    })
  }
}
}
</script>