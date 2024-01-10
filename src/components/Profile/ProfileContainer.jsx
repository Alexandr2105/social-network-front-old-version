import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileForCurrentUser} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileForCurrentUser(userId);
    }

    render() {
        return (this.props.isAuth ? <Profile profile={this.props.profile}/> : <Redirect to="/login"/>)
    }
}

const mapStataToProps = (state) => {
    return {profile: state.profileReducer.profile, isAuth: state.loginReducer.isAuth};
}

const urlDateWithRouter = withRouter(ProfileContainer);

export default connect(mapStataToProps, {getProfileForCurrentUser})(urlDateWithRouter);
