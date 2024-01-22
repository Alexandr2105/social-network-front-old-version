import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import {login} from "../../../redux/loginReducer";
import {LoginReducerForm} from "./LoginForm";

class LoginFormContainer extends React.Component {

    render() {
        return <LoginReducerForm onSubmit={this.props.login}/>
    }
}

export default compose(connect(null, {login})(LoginFormContainer));