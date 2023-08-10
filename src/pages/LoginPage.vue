<template>
  <div class="login-root">
    <div class="login-form">
      <h1>Welcome to Vuedle! Please log in:</h1>
      <div class="input-container">
        <label for="Username">Username: </label>
        <input
          class="Username login-input"
          v-model="username"
          v-on:keyup.enter="attemptLogin"
        />
      </div>
      <br />
      <div class="input-container">
        <label for="Password">Password: </label>
        <input
          class="Password login-input"
          type="password"
          v-model="password"
          v-on:keyup.enter="attemptLogin"
        />
      </div>
      <br />
      <button style="width: 100%" v-on:click="attemptLogin">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    attemptLogin: function () {
      console.log(this.username);
      console.log(this.password);
    },
  },
};
</script>

<style scoped lang="scss">
.login-form {
  background-color: #eee;
  padding: 20px;
  border: 4px solid rgb(37, 37, 37);
  box-shadow: 10px 10px 10px black;
  label {
    display: block;
    min-width: 90px;
  }
}

.input-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.login-input {
  width: 100%;
}

.login-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}
</style>