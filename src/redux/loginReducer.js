import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    fullName: null,
    email: null,
    isAuth: false,
    token: localStorage.getItem('authToken') || "",
}

const SET_AUTH_STATE = "social-network/login/SET_AUTH_STATE";
const SET_BEARER_TOKEN = "social-network/login/SET_BEARER_TOKEN"

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATE: {
            return {...state, email: action.email, fullName: action.fullName, id: action.userId, isAuth: action.isAuth};
        }
        case SET_BEARER_TOKEN: {
            localStorage.setItem('authToken', action.token);
            return {...state, token: action.token};
        }
        default:
            return state;
    }
}

export const setAuthState = (userId, fullName, email, isAuth, token) => ({
    type: SET_AUTH_STATE,
    userId,
    fullName,
    email,
    isAuth,
    token,
});

export const setBearerToken = (token) => ({
    type: SET_BEARER_TOKEN, token
})

export const getUserInformation = (token) => {
    return (dispatch) => {
        return authAPI.getMeInformation(token).then(response => {
            const {id, fullName, email} = response.data;
            if (response.status === 200) {
                dispatch(setAuthState(id, fullName, email, true));
            }
        }).catch(() => {
        })
    }
}

export const login = (data) => (dispatch) => {
    authAPI.login(data.email, data.password).then(response => {
        if (response.status === 201) {
            dispatch(setBearerToken(response.data.accessToken));
            dispatch(getUserInformation(response.data.accessToken));
        }
    }).catch(() => {
        dispatch(stopSubmit("login", {_error: "Incorrect Email or Password"}));
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.status === 204) {
            dispatch(setAuthState(null, null, null, false, null));
        }
    })
}

export default loginReducer;