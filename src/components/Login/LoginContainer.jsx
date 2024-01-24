import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuth} from "../../redux/selectors/headerSelectors";

class LoginContainer extends React.Component {
    render() {
        return <Login isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => (
    {isAuth: getAuth(state),}
)

export default compose(connect(mapStateToProps, {})(LoginContainer))