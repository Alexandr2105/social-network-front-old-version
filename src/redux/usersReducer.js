const initialState = {
    users: [],
    pagesCount: 0,
    currentPage: 1,
    isFetching: false,
    isClickButton: [],
}

const FOLLOW_ON = "FOLLOW_ON";
const FOLLOW_OFF = "FOLLOW_OFF";
const SET_USERS = "SET_USERS";
const SET_PAGES_COUNT = "SET_PAGES_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const IS_CLICK_BUTTON = "IS_CLICK_BUTTON";

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
            return {...state, users: action.users};
        }
        case SET_PAGES_COUNT: {
            return {...state, pagesCount: action.pagesCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.status}
        }
        case IS_CLICK_BUTTON: {
            return {
                ...state,
                isClickButton: action.status ? [...state.isClickButton, action.id] : [state.isClickButton.filter(element => element !== action.id)]
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW_ON, userId});
export const unfollow = (userId) => ({type: FOLLOW_OFF, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPagesCount = (pagesCount) => ({type: SET_PAGES_COUNT, pagesCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setFetching = (status) => ({type: IS_FETCHING, status});
export const setClickButton = (id, status) => ({type: IS_CLICK_BUTTON, id, status});

export default usersReducer;