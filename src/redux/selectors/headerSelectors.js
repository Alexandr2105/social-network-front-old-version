export const getUserId = (state) => {
    return state.loginReducer.id;
}

export const getFullName = (state) => {
    return state.loginReducer.fullName;
}

export const getEmail = (state) => {
    return state.loginReducer.email;
}

export const getAuth = (state) => {
    return state.loginReducer.isAuth;
}