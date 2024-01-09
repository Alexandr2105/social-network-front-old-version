import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getUserInformation} from "../../redux/loginReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserInformation();
    }

    render() {
        return <Header isAuth={this.props.isAuth} fullName={this.props.fullName}/>
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

export default connect(mapStateToProps, {getUserInformation})(HeaderContainer);