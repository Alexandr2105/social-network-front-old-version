export const getUsers = (state) => {
    return state.usersReducer.users;
}

export const getPageCount = (state) => {
    return state.usersReducer.pagesCount;
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export const getFetching = (state) => {
    return state.usersReducer.isFetching;
}

export const getClickButton = (state) => {
    return state.usersReducer.isClickButton;
}

export const getPagesForView = (state) => {
    return state.usersReducer.viewPages;
}