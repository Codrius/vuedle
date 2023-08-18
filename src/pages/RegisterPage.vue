<template>
  <div class="register-root">
    <div class="register-form">
      <h1>Welcome to Vuedle! Please Register:</h1>
      <div class="error">{{ this.emailError }}</div>
      <div class="input-container">
        <label for="Email">Email: </label>
        <input
          class="Email register-input"
          v-model="email"
          v-on:keyup.enter="attemptRegister({ email, username, password })"
        />
      </div>
      <div class="error">{{ this.usernameError }}</div>
      <div class="input-container">
        <label for="Username">Username: </label>
        <input
          class="Username register-input"
          v-model="username"
          v-on:keyup.enter="attemptRegister({ email, username, password })"
        />
      </div>
      <div class="error">{{ this.passwordError }}</div>
      <div class="input-container">
        <div class="password-error"></div>
        <label for="Password">Password: </label>
        <input
          class="Password register-input"
          type="password"
          v-model="password"
          v-on:keyup.enter="attemptRegister({ email, username, password })"
        />
      </div>
      <br />
      <button
        style="width: 100%"
        v-on:click="attemptRegister({ email, username, password })"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["attemptRegister"]),
  },
  computed: {
    ...mapGetters(["emailError", "usernameError", "passwordError"]),
  },
};
</script>

<style scoped lang="scss">
.register-form {
  background-color: #eee;
  padding: 20px;
  border: 4px solid rgb(37, 37, 37);
  box-shadow: 10px 10px 10px black;
  label {
    display: block;
    min-width: 90px;
  }
}

.error {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1.5rem;
  color: red;
}

.input-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.register-input {
  width: 100%;
}

.register-root {
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