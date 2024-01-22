import React from "react";
import {Redirect} from "react-router-dom";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={props.onSubmit}/>
        </div>);
}
export default Login;