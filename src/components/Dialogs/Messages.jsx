import React from "react";
import TextAreaAndButton from "../TextAreaAndButton/TextAreaAndButton";
import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/dialogsReducer";
import Message from "./Message/Message";
import People from "./People/People";
import mod from "./Messges.module.css"

const Messages = (props) => {

    const message = props.state.messages.map(m => <Message message={m.message}/>);
    const people = props.state.dialogs.map(d => <People name={d.name} avatar={d.avatar}/>)

    return (
        <div>
            <div className={mod.dialogs}>
                <div>
                    {people}
                </div>
                <div>
                    <p>{message}</p>
                    <TextAreaAndButton dispatch={props.dispatch} value={props.state.updateNewMessage}
                                       create={addMessageActionCreator} update={updateTextNewMessageActionCreator}/>
                </div>
            </div>
        </div>
    )
}

export default Messages;