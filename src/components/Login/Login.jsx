import React from "react";
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

const Login = () => {
    const form = (data) => {
        authAPI.login(data.email, data.password).then(response => {
            console.log(response.data);
        });
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReducerForm onSubmit={form}/>
        </div>)
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} component={"input"} name={"email"}/>
            </div>
            <div>
                <Field placeholder={"password"} component={"input"} name={"password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"remember me"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReducerForm = reduxForm({form: "login"})(LoginForm);

export default Login;