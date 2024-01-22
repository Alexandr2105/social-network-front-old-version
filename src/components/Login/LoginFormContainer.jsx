import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import {login} from "../../redux/loginReducer";

class LoginFormContainer extends React.Component {

    render() {
        return <Login onSubmit={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => (
    {isAuth: state.loginReducer.isAuth}
)

export default compose(connect(mapStateToProps, {login})(LoginFormContainer));