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
            return {...state, email: action.email, fullName: action.fullName, id: action.userId, isAuth: true}
        }
        default:
            return state;
    }
}

export const setAuthState = (userId, fullName, email) => ({type: SET_AUTH_STATE, userId, fullName, email})

export default loginReducer;