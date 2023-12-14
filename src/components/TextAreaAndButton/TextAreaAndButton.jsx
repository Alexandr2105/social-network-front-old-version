import React from "react";
import mod from "./TextAreaAndButton.module.css";

const TextAreaAndButton = (props) => {
    const onChange = (e) => {
        const text = e.target.value;
        props.dispatch(props.update(text));
    }

    const createPost = () => {
        props.dispatch(props.create());
    }

    return (
        <div className={mod.textArea}>
            <textarea onChange={onChange} placeholder="Введите текст" value={props.value}/>
            <button onClick={createPost}>Send</button>
        </div>
    )
}

export default TextAreaAndButton;