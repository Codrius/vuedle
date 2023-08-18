<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}
</style>

