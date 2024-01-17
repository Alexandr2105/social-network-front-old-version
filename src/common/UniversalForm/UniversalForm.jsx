import {Field} from "redux-form";
import React from "react";

const UniversalForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message" component="textarea" placeholder="Введите текст"/>
            <button>Send</button>
        </form>
    )
}

export default UniversalForm;