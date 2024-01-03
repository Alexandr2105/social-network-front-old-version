import axios from "axios";
import {settings} from "../common/settings";

const instance = axios.create({withCredentials: true, baseURL: settings.BACK_ADDRESS})

export const usersAPI = {
    getUsers(pageNumber) {
        return instance.get(`/users?pageNumber=${pageNumber}`).then(response => response.data)
    }
}

export const followerAPI = {
    createFollowers(userId) {
        return instance.post(`/followers/${userId}`).then(response => {
            return {
                data: response.data,
                status: response.status,
            }
        })
    },

    deleteFollowers(userId) {
        return instance.delete(`/followers/${userId}`).then(response => {
            return {
                data: response.data,
                status: response.status,
            }
        })
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
    }
}

export const profileAPI = {
    getProfileForCurrentUser(userId) {
        return instance.get(`/profile/${userId}`).then(response => response.data)
    }
}