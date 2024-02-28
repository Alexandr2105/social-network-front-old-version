import {followerAPI, usersAPI} from "../api/api";

const initialState = {
    users: [],
    pagesCount: 0,
    currentPage: 1,
    isFetching: false,
    isClickButton: [],
    viewPages: 5,
}

const FOLLOW_ON = "social-network/users/FOLLOW_ON";
const FOLLOW_OFF = "social-network/users/FOLLOW_OFF";
const SET_USERS = "social-network/users/SET_USERS";
const SET_PAGES_COUNT = "social-network/users/SET_PAGES_COUNT";
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE";
const IS_FETCHING = "social-network/users/IS_FETCHING";
const IS_CLICK_BUTTON = "social-network/users/IS_CLICK_BUTTON";

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
                isClickButton: action.status ? [...state.isClickButton, action.id] : state.isClickButton.filter(element => element !== action.id)
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

export const users = (currentPage) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        usersAPI.getUsers(currentPage).then(response => {
            dispatch(setFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setPagesCount(response.data.pagesCount));
            dispatch(setCurrentPage(currentPage));
        });
    }
}

export const followOrUnfollowShowStatus = (userId, userStatus, authToken) => {
    return (dispatch) => {
        dispatch(setClickButton(userId, true));
        let followPromise;

        if (userStatus) {
            followPromise = followerAPI.deleteFollowers(userId, authToken);
        } else {
            followPromise = followerAPI.createFollowers(userId, authToken);
        }

        followPromise
            .then(status => {
                if (status === 204 && userStatus) {
                    dispatch(unfollow(userId));
                } else if (status === 201 && !userStatus) {
                    dispatch(follow(userId));
                }
            })
            .finally(() => {
                dispatch(setClickButton(userId, false));
            });
    }
}


export default usersReducer;