import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {Input} from "../../common/FormsControl/FormsControl";
import React from "react";
import mod from "./LoginForm.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={mod.formError}>
                {props.error}
            </div>
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