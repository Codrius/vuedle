<template>
  <b-navbar class="px-3" toggleable="sm" type="dark" variant="dark">
    <b-navbar-brand active-class="active" to="/">Vuedle</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"/>
    <b-collapse id="nav-collapse" is-nav>
      <b-nav pills justified>  
        <b-nav-item active-class="active" to="/game">Game</b-nav-item>
        <b-nav-item-dropdown right :text="username"> 
          <b-dropdown-item v-if="!userid" active-class="active" to="/register">Register</b-dropdown-item>
          <b-dropdown-item v-if="!userid" active-class="active" to="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="userid" v-on:click="attemptSave()">Save</b-dropdown-item>
          <b-dropdown-item v-if="userid" v-on:click="logOut()">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["username", "userid"]),
  },
  methods: {
    ...mapActions(["attemptSave","logOut"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
