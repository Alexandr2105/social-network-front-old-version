import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {Input} from "../../common/FormsControl/FormsControl";
import React from "react";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="email" validate={[required]} component={Input} name="email"/>
            </div>
            <div>
                <Field validate={[required]} placeholder="password" component={Input} name="password" type="password"/>
            </div>
            <div>
                <Field component="input" type="checkbox" name="remember me"/>Remember me
            </div>
            <div>
                <button disabled={props.invalid}>Login</button>
            </div>
        </form>
    )
}

export const LoginReducerForm = reduxForm({form: "login"})(LoginForm);