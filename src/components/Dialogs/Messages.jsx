import React from "react";
import Message from "./Message/Message";
import People from "./People/People";
import mod from "./Messges.module.css"

const Messages = (props) => {

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
                    <div>
                        <textarea onChange={props.onChangeMessage} placeholder="Введите текст"
                                  value={props.updateNewMessage}/>
                        <button onClick={props.createMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;