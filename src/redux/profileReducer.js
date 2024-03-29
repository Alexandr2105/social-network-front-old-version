import {authAPI, profileAPI} from "../api/api";
import {setBearerToken} from "./loginReducer";

const initialState = {
    posts: [
        {
            id: 1,
            message: "Hi, my name is Alex.",
            likes: "20"
        }, {
            id: 2,
            message: "What is you name?",
            likes: 10
        }, {
            id: 3,
            message: "How are you?",
            likes: 99
        }
    ],
    profile: null,
};


const ADD_POST_ACTION_TYPE = "social-network/profile/ADD_POST_ACTION_TYPE";
const UPDATE_PROFILE_ACTION_TYPE = "social-network/profile/UPDATE_PROFILE_ACTION_TYPE";
const SAVE_PROFILE_STATUS_TYPE = "social-network/profile/SAVE_PROFILE_STATUS";
const SAVE_AVATAR = "social-network/profile/SAVE_AVATAR";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_ACTION_TYPE: {
            const newPost = {
                id: 4,
                message: action.post,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        }
        case UPDATE_PROFILE_ACTION_TYPE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PROFILE_STATUS_TYPE: {
            return {...state, profile: action.profile}
        }
        case SAVE_AVATAR: {
            return {...state, profile: {...state.profile, avatar: action.avatar}}
        }
        default :
            return state;
    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST_ACTION_TYPE, post});
export const setProfile = (profile) => ({type: UPDATE_PROFILE_ACTION_TYPE, profile: profile});
export const saveProfileStatus = (profile) => ({type: SAVE_PROFILE_STATUS_TYPE, profile: profile});
export const saveAvatarForUser = (avatar) => ({type: SAVE_AVATAR, avatar: avatar});

export const getProfileForCurrentUser = (userId, authToken) => {
    return (dispatch) => {
        profileAPI.getProfileForCurrentUser(userId, authToken).then(response => {
            dispatch(setProfile(response.data));
        }).catch(() => {
            return authAPI.refreshToken().then(response => {
                const {accessToken} = response.data;
                if (response.status === 201) {
                    dispatch(setBearerToken(accessToken));
                    dispatch(getProfileForCurrentUser(userId, accessToken));
                }
            }).catch(() => {
            })
        })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        dispatch(addPostActionCreator(post));
    }
}

export const saveStatus = (status, authToken) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status, authToken).then(response => {
            if (response.status === 201) dispatch(saveProfileStatus(response.data))
        });
    }
}

export const saveAvatar = (avatar, authToken) => {
    return (dispatch) => {
        profileAPI.saveAvatar(avatar, authToken).then(response => {
            if (response.status === 201) dispatch(saveAvatarForUser(response.data));
        })
    }
}

export default profileReducer;