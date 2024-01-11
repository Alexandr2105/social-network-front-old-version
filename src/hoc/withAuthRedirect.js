import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {isAuth: state.loginReducer.isAuth}
}

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
            return props.isAuth ? <Component {...props}/> : <Redirect to="/login"/>
    }

    return connect(mapStateToProps)(RedirectComponent);
}