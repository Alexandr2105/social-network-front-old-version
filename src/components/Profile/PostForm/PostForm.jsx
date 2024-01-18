import {Field, reduxForm} from "redux-form";
import React from "react";
import {checkMaxLength, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength100 = checkMaxLength(100);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="post" validate={[required, maxLength100]} component={Textarea}
                   placeholder="Введите текст"/>
            <button disabled={props.invalid}>Send</button>
        </form>
    )
}

export default reduxForm({form: "textsForm"})(PostForm);