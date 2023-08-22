<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  components: { NavBar },
  methods: {
    ...mapMutations(["readAuthFromLocal"]),
    ...mapActions(["attemptLoad"]),
  },
  mounted() {
    this.readAuthFromLocal();
    if (localStorage.getItem("vuedleAuthState")) {
      this.attemptLoad();
    }
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}
</style>

