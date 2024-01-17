import React from "react";
import Message from "./Message/Message";
import People from "./People/People";
import mod from "./Messges.module.css"
import {reduxForm} from "redux-form";
import UniversalForm from "../../common/UniversalForm/UniversalForm";

const Messages = (props) => {
    const form = (data) => {
        props.createMessage(data.message);
    }

    const message = props.messages.map(m => <Message key={m.id} message={m.message}/>);
    const people = props.dialogs.map(d => <People key={d.id} id={d.id.toString()} name={d.name}
                                                  avatar={d.avatar}/>)
    return (
        <div>
            <div className={mod.dialogs}>
                <div>
                    {people}
                </div>
                <div>
                    <div>{message}</div>
                    <SendMessageReducerForm onSubmit={form}/>
                </div>
            </div>
        </div>
    )
}

const SendMessageReducerForm = reduxForm({form: "sendMessage"})(UniversalForm);

export default Messages;