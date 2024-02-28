import {Field, reduxForm} from "redux-form";
import {checkMaxLength, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";
import React from "react";

const maxLength100 = checkMaxLength(100);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message" validate={[required, maxLength100]} component={Textarea}
                   placeholder="Введите текст"/>
            <button disabled={props.invalid}>Send</button>
        </form>
    )
}

export default reduxForm({form: "textMessage"})(AddMessageForm);