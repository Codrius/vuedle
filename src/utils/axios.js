import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
    baseURL: "http://127.0.0.1:4000/"
});

async function refreshIfExpired(store, token) {
    if (token) {
        const decodedJwt = jwt_decode(token);
        const currentTime = (Date.now() / 1000);
        if (decodedJwt.exp <= (currentTime + 5)) {
            try {
                const res = await axios.post("http://127.0.0.1:4000/refresh", {
                    refreshToken: store.getters.refreshToken,
                    id: store.getters.userid
                });
                store.commit("setJwt", res.data.jwtToken);
                store.commit("setRefreshToken", res.data.refreshToken);
                return res.data.jwtToken;
            } catch (error) {
                console.log(error);
                store.commit("logOut");
                alert("An error has ocurred, logging out.");
            }
        }
        return token;
    }
    return false;
}

export function connectAxiosInstanceToStore(store) {
    instance.interceptors.request.use(async (config) => {
        const token = await refreshIfExpired(store, store.getters.jwt);
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    });
}

export default instance;