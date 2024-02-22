import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    fullName: null,
    email: null,
    isAuth: false,
}

const SET_AUTH_STATE = "social-network/login/SET_AUTH_STATE";

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATE: {
            return {...state, email: action.email, fullName: action.fullName, id: action.userId, isAuth: action.isAuth}
        }
        default:
            return state;
    }
}

export const setAuthState = (userId, fullName, email, isAuth) => ({
    type: SET_AUTH_STATE,
    userId,
    fullName,
    email,
    isAuth
});

export const getUserInformation = () => {
    return (dispatch) => {
        return authAPI.getMeInformation().then(response => {
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
            dispatch(getUserInformation());
        }
    }).catch(() => {
        dispatch(stopSubmit("login", {_error: "Incorrect Email or Password"}));
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.status === 204) {
            dispatch(setAuthState(null, null, null, false));
        }
    })
}

export default loginReducer;