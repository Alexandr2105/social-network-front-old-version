import axios from "axios";
import {settings} from "../utils/settings";

const instance = axios.create({withCredentials: true, baseURL: settings.BACK_ADDRESS})

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
    createFollowers(userId) {
        return instance.post(`/followers/${userId}`).then(response => response.status)
    },

    deleteFollowers(userId) {
        return instance.delete(`/followers/${userId}`).then(response => response.status)
    }
}

export const authAPI = {
    getMeInformation() {
        return instance.get(`/auth/me`).then(response => {
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
    }
}

export const profileAPI = {
    getProfileForCurrentUser(userId) {
        return instance.get(`/profile/${userId}`);
    },

    updateProfileStatus(status) {
        return instance.post("/profile", {status: status}).then(response => {
            return {
                data: response.data,
                status: response.status,
            }
        });
    }
}