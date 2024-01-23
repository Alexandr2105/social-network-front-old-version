import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/loginReducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header isAuth={this.props.isAuth} fullName={this.props.fullName} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.loginReducer.id,
        fullName: state.loginReducer.fullName,
        email: state.loginReducer.email,
        isAuth: state.loginReducer.isAuth,
    }
}

export default compose(connect(mapStateToProps, {logout})(HeaderContainer));