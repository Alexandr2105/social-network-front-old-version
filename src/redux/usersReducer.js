const initialState = {
    users: [],
    pagesCount: 0,
    currentPage: 1,
}

const FOLLOW_ON = "FOLLOW_ON";
const FOLLOW_OFF = "FOLLOW_OFF";
const SET_USERS = "SET_USERS";
const SET_PAGES_COUNT = "SET_PAGES_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_ON:
            return {
                ...state, users: state.users.map(u => u.userId === action.userId ? {...u, follow: true} : u)
            }
        case FOLLOW_OFF: {
            return {
                ...state, users: state.users.map(u => u.userId === action.userId ? {...u, follow: false} : u)
            }
        }
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_PAGES_COUNT: {
            return {...state, pagesCount: action.pagesCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW_ON, userId})
export const unfollow = (userId) => ({type: FOLLOW_OFF, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPagesCount = (pagesCount) => ({type: SET_PAGES_COUNT, pagesCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer;