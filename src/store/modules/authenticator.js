import axios from "axios";
import router from "../../router/index.js";

const state = {
    jwt: "",
    refreshToken: "",
    username: "Guest",
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
    refreshToken({ refreshToken }) {
        return refreshToken;
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
    setRefreshToken(state, newRefreshToken) {
        state.refreshToken = newRefreshToken;
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
        }) // If successful, set the user state and clear errors
            .then((res) => {
                context.commit("setEmail", email);
                context.commit("setUsername", username);
                context.commit("setUserid", res.data.id);
                localStorage.setItem("vuedleJwt", res.data.jwtToken);
                localStorage.setItem("vuedleRefreshToken", res.data.refreshToken);
                context.commit("clearErrors");
                console.log(res);
                router.push("/game");
            })
            .catch((error) => { // If error, set the error states
                context.commit("setUsernameError", error.response.data.username);
                context.commit("setEmailError", error.response.data.email);
                context.commit("setPasswordError", error.response.data.password);
                console.log(error.response.data);
            });
    },
    attemptLogin(context, { email, password }) {
        axios.post("http://127.0.0.1:4000/login", {
            email,
            password,
            config: { withCredentials: true },
        }) // If successful, set the user state and clear errors
            .then((res) => {
                context.commit("setEmail", email);
                context.commit("setUsername", res.data.username);
                context.commit("setUserid", res.data.id);
                localStorage.setItem("vuedleJwt", res.data.jwtToken);
                localStorage.setItem("vuedleRefreshToken", res.data.refreshToken);
                context.commit("clearErrors");
                console.log(res);
                router.push("/game");
            })
            .catch((error) => { // If error, set the error states
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