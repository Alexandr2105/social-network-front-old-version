import axios from "axios";
import {settings} from "../utils/settings";

const instance = axios.create({withCredentials: true, baseURL: settings.BACK_ADDRESS});
const headers = (authToken) => ({headers: {Authorization: `Bearer ${authToken}`}});

// instance.interceptors.request.use(config => {
//      if (token) {
//          config.headers.Authorization = `Bearer ${token}`;
//      }
//
//     return config;
// });

export const usersAPI = {
    getUsers(pageNumber) {
        return instance.get(`/users?pageNumber=${pageNumber}`)
    }
}

export const followerAPI = {
    createFollowers(userId, authToken) {
        return instance.post(`/followers/${userId}`, {}, headers(authToken)).then(response => response.status)
    },

    deleteFollowers(userId, authToken) {
        return instance.delete(`/followers/${userId}`, headers(authToken)).then(response => response.status)
    }
}

export const authAPI = {
    getMeInformation(authToken) {
        return instance.get(`/auth/me`, headers(authToken)).then(response => {
                return {
                    data: response.data,
                    status: response.status,
                }
            }
        )
    },

    login(email, password) {
        return instance.post("auth/login", {email, password});
    },

    logout() {
        return instance.delete("auth/logout");
    },

    refreshToken(){
        return instance.post("auth/refresh-token");
    },
}

export const profileAPI = {
    getProfileForCurrentUser(userId, authToken) {
        return instance.get(`/profile/${userId}`, headers(authToken));
    },

    updateProfileStatus(status, authToken) {
        return instance.post("/profile", {status: status}, headers(authToken)).then(response => {
            return {
                data: response.data,
                status: response.status,
            }
        });
    }
}