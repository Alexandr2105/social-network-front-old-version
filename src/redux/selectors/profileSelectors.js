export const getProfile = (state) => {
    return state.profileReducer.profile;
}

export const getStatus = (state) => {
    return state.profileReducer.profile.status;
}

export const getPosts = (state) => {
    return state.profileReducer.posts;
}
