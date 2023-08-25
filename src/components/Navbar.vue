<template>
  <nav>
    <div class="empty-div"></div>
    <div class="navbar-button-container">
      <router-link class="navbar-button" to="/">Home</router-link>
      <router-link class="navbar-button" to="/game">Game</router-link>
      <router-link class="navbar-button" to="/register">Register</router-link>
      <router-link class="navbar-button" to="/login">Login</router-link>
    </div>
    <div class="username">Currently logged in as: {{ username }}</div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["username"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: rgb(48, 48, 48);
  box-shadow: 0px 10px 10px;
}
.navbar-button-container {
  height: 100%;
}
.navbar-button {
  padding: 12px;
  background-color: rgb(29, 29, 68);
  color: rgb(0, 255, 115);
  text-decoration: none;
  border: 2px solid black;
  display: inline-flex;
  justify-content: center;
}
.navbar-button:hover {
  background-color: rgb(48, 48, 119);
}
.username {
  display: inline-flex;
  background-color: rgb(29, 29, 68);
  padding-left: 10px;
  border: 2px solid black;
  color: rgb(0, 226, 102);
  text-align: center;
  min-width: 15vw;
  max-width: 15vw;
}
.empty-div {
  min-width: 15vw;
  max-width: 15vw;
}
</style>
