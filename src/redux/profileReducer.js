import {profileAPI} from "../api/api";

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
    updateNewPost: "",
    profile: null,
};


const ADD_POST_ACTION_TYPE = "ADD_POST_ACTION_TYPE";
const UPDATE_TEXT_NEW_POST_ACTION_TYPE = "UPDATE_TEXT_NEW_POST_ACTION_TYPE";
const UPDATE_PROFILE_ACTION_TYPE = "UPDATE_PROFILE_ACTION_TYPE";
const SAVE_PROFILE_STATUS_TYPE = "SAVE_PROFILE_STATUS";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_ACTION_TYPE: {
            const newPost = {
                id: 4,
                message: state.updateNewPost,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], updateNewPost: ""};
        }
        case UPDATE_TEXT_NEW_POST_ACTION_TYPE: {
            return {...state, updateNewPost: action.newText}
        }
        case UPDATE_PROFILE_ACTION_TYPE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PROFILE_STATUS_TYPE: {
            return {...state, profile: action.profile}
        }
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_ACTION_TYPE});
export const updateTextNewPostActionCreator = (text) => ({type: UPDATE_TEXT_NEW_POST_ACTION_TYPE, newText: text});
export const setProfile = (profile) => ({type: UPDATE_PROFILE_ACTION_TYPE, profile: profile});
export const saveProfileStatus = (profile) => ({type: SAVE_PROFILE_STATUS_TYPE, profile: profile});

export const getProfileForCurrentUser = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 11;
        }
        profileAPI.getProfileForCurrentUser(userId).then(response => {
            dispatch(setProfile(response.data));
        })
    }
}

export const onChangePost = (e) => {
    return (dispatch) => {
        const text = e.target.value;
        dispatch(updateTextNewPostActionCreator(text));
    }
}

export const createPost = () => {
    return (dispatch) => {
        dispatch(addPostActionCreator());
    }
}

export const saveStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status).then(response => {
            if (response.status === 201) dispatch(saveProfileStatus(response.data))
        });
    }
}

export default profileReducer;