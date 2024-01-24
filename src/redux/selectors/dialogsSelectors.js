export const getMessages = (state) => {
    return state.dialogsReducer.messages;
}

export const getDialogs = (state) => {
    return state.dialogsReducer.dialogs;
}