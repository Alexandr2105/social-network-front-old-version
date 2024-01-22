import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";

class LoginContainer extends React.Component {
    render() {
        return <Login isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => (
    {isAuth: state.loginReducer.isAuth}
)

export default compose(connect(mapStateToProps, {})(LoginContainer))