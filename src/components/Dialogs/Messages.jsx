import React from "react";
import Message from "./Message/Message";
import People from "./People/People";
import mod from "./Messges.module.css"

const Messages = (props) => {

    const message = props.messages.map(m => <Message message={m.message}/>);
    const people = props.dialogs.map(d => <People id={d.id.toString()} name={d.name}
                                                  avatar={d.avatar}/>)

    const onChange = (e) => {
        const text = e.target.value;
        props.updateMessage(text);
    }

    const createPost = () => {
        props.createMessage();
    }

    return (
        <div>
            <div className={mod.dialogs}>
                <div>
                    {people}
                </div>
                <div>
                    <p>{message}</p>
                    <div>
                        <textarea onChange={onChange} placeholder="Введите текст"
                                  value={props.updateNewMessage}/>
                        <button onClick={createPost}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;