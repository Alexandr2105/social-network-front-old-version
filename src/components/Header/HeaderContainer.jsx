import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/loginReducer";
import {compose} from "redux";
import {getAuth, getEmail, getFullName, getUserId} from "../../redux/selectors/headerSelectors";

class HeaderContainer extends React.Component {
    render() {
        return <Header isAuth={this.props.isAuth} fullName={this.props.fullName} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: getUserId(state),
        fullName: getFullName(state),
        email: getEmail(state),
        isAuth: getAuth(state),
    }
}

export default compose(connect(mapStateToProps, {logout})(HeaderContainer));