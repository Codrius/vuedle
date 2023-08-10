<template>
  <nav>
    <router-link class="navbar-button" to="/">Home</router-link>
    <router-link class="navbar-button" to="/game">Game</router-link>
    <router-link class="navbar-button" to="/login">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: rgb(48, 48, 48);
  box-shadow: 0px 10px 10px;
}
.navbar-button {
  padding: 10px;
  background-color: rgb(48, 48, 119);
  color: rgb(0, 255, 115);
  text-decoration: none;
  border: 2px solid black;
  display: inline-flex;
  justify-content: center;
}
</style>
