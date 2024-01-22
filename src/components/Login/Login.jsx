import React from "react";
import {LoginReducerForm} from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReducerForm onSubmit={props.onSubmit}/>
        </div>);
}
export default Login;