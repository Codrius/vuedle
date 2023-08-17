import axios from "axios"

const state = {
    jwt: "",
    username: "",
    userid: "",
    email: "",
    usernameError: "",
    emailError: "",
    passwordError: ""
}
const getters = {
    jwt({ jwt }) {
        return jwt;
    },
    username({ username }) {
        return username;
    },
    userid({ userid }) {
        return userid;
    },
    email({ email }) {
        return email;
    },
    usernameError({ usernameError }) {
        return usernameError;
    },
    emailError({ emailError }) {
        return emailError;
    },
    passwordError({ passwordError }) {
        return passwordError;
    },
}
const mutations = {
    setJwt(state, newjwt) {
        state.jwt = newjwt;
    },
    setUsername(state, newUsername) {
        state.username = newUsername;
    },
    setUserid(state, newUserid) {
        state.userid = newUserid;
    },
    setEmail(state, newEmail) {
        state.email = newEmail;
    },
    setUsernameError(state, usernameError) {
        state.usernameError = usernameError;
    },
    setEmailError(state, emailError) {
        state.emailError = emailError;
    },
    setPasswordError(state, passwordError) {
        state.passwordError = passwordError;
    },
    clearErrors(state) {
        state.usernameError = "";
        state.emailError = "";
        state.passwordError = "";
    }
}
const actions = {
    // Post to the register API
    attemptRegister(context, { email, username, password }) {
        axios.post("http://127.0.0.1:4000/register", {
            email: email,
            username: username,
            password: password,
            config: { withCredentials: true },
        }) // If successful, set the user state and clear errors
            .then((res) => {
                context.commit("setEmail", email);
                context.commit("setUsername", username);
                context.commit("setUserid", res.data.id);
                context.commit("setJwt", res.data.token);
                context.commit("clearErrors");
                console.log(res);
            })
            .catch((error) => { // If error, set the error states
                context.commit("setUsernameError", error.response.data.username);
                context.commit("setEmailError", error.response.data.email);
                context.commit("setPasswordError", error.response.data.password);
                console.log(error.response.data);
            });
    }
}
const modules = {}

export default {
    state,
    getters,
    mutations,
    actions,
    modules
}