<template>
  <b-navbar class="px-3" toggleable="sm" type="dark" variant="dark">

    <b-navbar-brand active-class="active" to="/">
    <img src="@/assets/logo.png">
    Vuedle
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"/>
    <b-collapse id="nav-collapse" is-nav>
    
      <b-nav pills justified>  <!-- Left aligned b-nav -->
        <b-nav-item active-class="active" to="/game">Game</b-nav-item>
      </b-nav>

      <b-nav pills justified class="ml-auto"> <!-- Right aligned b-nav -->
        <b-nav-item-dropdown right toggle-class="text-light ml-auto" :text="username"> 
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
img {
  width: 26.5px;
}

.nav-link{ 
  color: white;
}
</style>
