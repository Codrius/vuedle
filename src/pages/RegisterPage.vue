<template>
  <b-container fluid class="register-root">

    <b-row class="vertical-aligner justify-content-center" align-v="center">

      <b-card class="register-card text-center">

        <template #header>
          <h3>Welcome to Vuedle! Please Register:</h3>
        </template>

        <b-card-body>
          <b-form-group
            :invalid-feedback="emailInputError"
            :state="emailValidator"
          >
            <b-form-input 
              id="email-input" 
              v-model="email" 
              placeholder="Email" 
              :state="emailValidator"
            />
          </b-form-group>

          <b-form-group
            :invalid-feedback="usernameInputError"
            :state="usernameValidator"
          >
            <b-form-input 
              id="username-input" 
              v-model="username" 
              placeholder="Username" 
              :state="usernameValidator"
            />
          </b-form-group>

          <b-form-group
            :invalid-feedback="passwordInputError"
            :state="passwordValidator"
          >
            <b-form-input 
              id="password-input" 
              type="password"
              v-model="password" 
              placeholder="Password" 
              :state="passwordValidator"
            />
          </b-form-group>

          <b-button 
            :disabled="verifyAll" 
            class="mt-3 mb-4" 
            variant="primary" 
            v-on:click="attemptRegister({ email, username, password })"
            >Register</b-button>

          <br>

          <b-link class="card-link" to="/login">Already a member?</b-link>

        </b-card-body>

      </b-card>

    </b-row>

  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// I am aware that HTML forms exist, but a big part of this project's goal was to build as much of it as I could inside of Vue.  This is also why the "Guts" of the game lives almost entirely in the front end, rather than on the back end where a user wouldn't be able to manipulate the state.

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      regEx: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    };
  },
  methods: {
    ...mapActions(["attemptRegister"]),
  },
  computed: {
    // These are intended to display any errors with registration
    ...mapGetters(["emailError"]),

    emailValidator() {
      if (this.emailError) {
        return false;
      } else if (this.email.length === 0) {
        return null;
      }
      return this.regEx.test(this.email);
    },

    emailInputError() {
      if (this.emailError) {
        return "Email already exists";
      }
      return "Invalid Email";
    },

    usernameValidator() {
      if (this.username.length === 0) {
        return null;
      }
      return (this.username.length <= 12);
    },

    usernameInputError() {
      return "Max 12 characters!";
    },

    passwordValidator() {
      if (this.password.length === 0) {
        return null;
      }
      return (this.password.length >= 6);
    },

    passwordInputError() {
      return "Minimum 6 characters!"
    },

    verifyAll() {
      return !(this.regEx.test(this.email) && this.usernameValidator && this.passwordValidator);
    }
  },
};
</script>

<style scoped lang="scss">
.register-root {
  height: calc(100vh - 56.5px);
  background-image: url("@/assets/background2.png");
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}

.vertical-aligner {
height: calc(100vh - 56.5px);
}

.register-card {
  max-width: 20rem;
  border: 2px solid black;
}
</style>