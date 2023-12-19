const initialState = {
    users: []
}

const FOLLOW_ON = "FOLLOW_ON";
const FOLLOW_OFF = "FOLLOW_OFF";
const SET_USERS = "SET_USERS";

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_ON:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, follow: true} : u)
            }
        case FOLLOW_OFF: {
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, follow: false} : u)
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW_ON, userId})
export const unfollow = (userId) => ({type: FOLLOW_OFF, userId})
export const setUsers = (users) => ({type: SET_USERS, users})

export default usersReducer;