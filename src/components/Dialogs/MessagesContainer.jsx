import React from "react";
import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    const state = props.store.getState();
    const onChange = (text) => {
        props.store.dispatch(updateTextNewMessageActionCreator(text));
    }

    const createMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return <Messages state={state} updateMessage={onChange} createMessage={createMessage}/>
}

export default MessagesContainer;