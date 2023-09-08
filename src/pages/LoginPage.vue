<template>
  <b-container fluid class="login-root">

    <b-row class="vertical-aligner justify-content-center" align-v="center">

      <b-card class="login-card text-center">

        <template #header>
          <h3>Welcome to Vuedle! Please Log In:</h3>
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
            :disabled="disableLogin" 
            class="mt-3 mb-4" 
            variant="primary" 
            v-on:click="attemptLogin({ email, password })"
            >Login</b-button>

          <br>

          <b-link class="card-link" to="/register">Not a member yet?</b-link>

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
    ...mapActions(["attemptLogin"]),
  },
  computed: {
    // These are intended to display any errors with registration
    ...mapGetters(["emailError", "passwordError"]),

    emailValidator() {
      if (this.emailError) {
        return false;
      }
      return null;
    },

    emailInputError() {
      if (this.emailError) {
        return "This email is not registered!";
      }
      return "Invalid Email";
    },

    passwordValidator() {
      if (this.passwordError) {
        return false;
      }
      return null;
    },

    passwordInputError() {
      if (this.passwordError) {
        return "Email and password do not match!"
      }
      return "Minimum 6 characters!"
    },

    disableLogin() {
      return !(this.regEx.test(this.email) && (this.password.length >= 1));
    }
  },
};
</script>

<style scoped lang="scss">
.login-root {
  height: calc(100vh - 56.5px);
  background-image: url("@/assets/background2.png");
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}

.vertical-aligner {
height: calc(100vh - 56.5px);
}

.login-card {
  max-width: 20rem;
  border: 2px solid black;
}
</style>