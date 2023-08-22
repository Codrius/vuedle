import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
    baseURL: "http://127.0.0.1:4000/"
});

async function refreshIfExpired(store, token) {
    if (token) {
        const decodedJwt = jwt_decode(token);
        const currentTime = (Date.now() / 1000);
        if (decodedJwt.exp <= (currentTime + 5)) { // If JWT is expiring within 5 seconds, refresh it.
            try {
                const res = await axios.post("http://127.0.0.1:4000/refresh", {
                    refreshToken: store.getters.refreshToken,
                    id: store.getters.userid
                });
                store.commit("setJwt", res.data.jwtToken);
                store.commit("setRefreshToken", res.data.refreshToken);
                return res.data.jwtToken;
            } catch (error) { // If the refresh token is invalid, log out the user.
                console.log(error);
                store.commit("logOut");
                alert("An error has ocurred, logging out.");
            }
        }
        return token;
    }
    return false; // If there is no JWT at all, do not attach one or interfere with the request
}

export function connectAxiosInstanceToStore(store) {
    instance.interceptors.request.use(async (config) => {
        const token = await refreshIfExpired(store, store.getters.jwt); // Before every request sent, check if JWT is expiring, if it is, refresh it and rotate the refresh token, always sends JWT if possible.
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    });
}

export default instance;