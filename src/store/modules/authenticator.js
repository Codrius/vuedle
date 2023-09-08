import axios from "@/utils/axios";
import router from "../../router/index.js";

const state = {
    jwt: "",
    refreshToken: "",
    username: "Account",
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
    setJwt(state, newJwt) {
        state.jwt = newJwt;
        localStorage.setItem("vuedleJwt", newJwt);
    },
    setRefreshToken(state, newRefreshToken) {
        state.refreshToken = newRefreshToken;
        localStorage.setItem("vuedleRefreshToken", newRefreshToken);
    },
    setUsername(state, newUsername) {
        state.username = newUsername;
    },
    setUserId(state, newUserid) {
        state.userid = newUserid;
    },
    setEmail(state, newEmail) {
        state.email = newEmail;
    },
    setUsernameError(state, usernameError) { // These are used for login/register pages
        state.usernameError = usernameError;
    },
    setEmailError(state, emailError) { // These are used for login/register pages
        state.emailError = emailError;
    },
    setPasswordError(state, passwordError) { // These are used for login/register pages
        state.passwordError = passwordError;
    },
    clearErrors(state) { // Once logged in or registered, clear the errors you may see on those screens.
        state.usernameError = "";
        state.emailError = "";
        state.passwordError = "";
    },
    deleteUserState(state) { // Delete all user-related state
        state.jwt = "";
        state.refreshToken = "";
        state.username = "Account";
        state.userid = "";
        state.email = "";
        localStorage.removeItem("vuedleAuthState");
        localStorage.removeItem("vuedleJwt");
        localStorage.removeItem("vuedleRefreshToken");
    },
    readAuthFromLocal(state) { // Read the entire user state from local storage.  Useful for page reloads.
        const authState = JSON.parse(localStorage.getItem("vuedleAuthState"));
        Object.assign(state, authState);
        state.jwt = localStorage.getItem("vuedleJwt");
        state.refreshToken = localStorage.getItem("vuedleRefreshToken");
    }
}
const actions = {
    // Post to the register API
    async attemptRegister(context, { email, username, password }) {
        try {
            const res = await axios.post("register", {
                email: email,
                username: username,
                password: password,
            }) // If successful, set the user state and clear errors
            context.commit("setEmail", email);
            context.commit("setUsername", username);
            context.commit("setUserId", res.data.id);
            context.commit("setJwt", res.data.jwtToken);
            context.commit("setRefreshToken", res.data.refreshToken);
            localStorage.setItem("vuedleAuthState", JSON.stringify({
                email,
                username,
                userid: res.data.id,
            }));
            context.commit("clearErrors");
            console.log(res);
            router.push("/game");
        } catch (error) { // If error, set the error states
            context.commit("setUsernameError", error.response.data.username);
            context.commit("setEmailError", error.response.data.email);
            context.commit("setPasswordError", error.response.data.password);
            console.log(error.response.data);
        }
    },
    // Post to the login API
    async attemptLogin(context, { email, password }) {
        try {
            const res = await axios.post("login", {
                email,
                password
            }) // If successful, set the user state and clear errors
            context.commit("setEmail", email);
            context.commit("setUsername", res.data.username);
            context.commit("setUserId", res.data.id);
            context.commit("setJwt", res.data.jwtToken);
            context.commit("setRefreshToken", res.data.refreshToken);
            localStorage.setItem("vuedleAuthState", JSON.stringify({
                email,
                username: res.data.username,
                userid: res.data.id,

            }));
            context.commit("clearErrors");
            console.log(res);
            context.dispatch("attemptLoad");
            router.push("/game");
        } catch (error) { // If error, set the error states
            context.commit("setEmailError", error.response.data.email);
            context.commit("setPasswordError", error.response.data.password);
            console.log(error.response.data);
        }
    },
    logOut(context) { // Destroy user/auth related state
        if (context.getters.email !== "") {
            context.commit("deleteUserState");
            context.commit("fullResetPromptless");
            alert("You have been logged out.");
        }
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