<template>
  <div class="Login">
    <h1>Welcome to Vuedle!  Please log in:</h1>
    <label for="Username">Username: </label>
    <input class="Username" v-model="username"/>
    <br>
    <label for="Password">Password: </label>
    <input class="Password" v-model="password"/>
    <br>
    <button v-on:click="attemptLogin">Login</button>
  </div>
</template>

<script>
export default {
  data() { return {
    username: "",
    password: ""
  }},
  methods: {
    attemptLogin: function() {
      console.log(this.username);
      console.log(this.password);
    }
  }
}
</script>