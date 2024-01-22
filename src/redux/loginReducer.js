import {authAPI} from "../api/api";

const initialState = {
    id: null,
    fullName: null,
    email: null,
    isAuth: false,
}

const SET_AUTH_STATE = "SET_AUTH_STATE";

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
        authAPI.getMeInformation().then(response => {
            const {id, fullName, email} = response.data;
            if (response.status === 200) {
                dispatch(setAuthState(id, fullName, email, true));
            }
        })
    }
}

export const login = (data) => (dispatch) => {
    authAPI.login(data.email, data.password).then(response => {
        if (response.status === 201) {
            dispatch(getUserInformation());
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.status === 204) {
            dispatch(setAuthState(null, null, null, false));
        }
    })
}

export default loginReducer;