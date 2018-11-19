<template>
  <div class="home">
    This is our demo app.
    <p>you can <router-link to="/login">Login</router-link> or <router-link to="/signup">Sign Up </router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {}
}
</script>

<style scoped>
</style>