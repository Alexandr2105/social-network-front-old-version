import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileForCurrentUser} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileForCurrentUser(userId);
    }

    render() {
        return (<Profile profile={this.props.profile}/>)
    }
}

const mapStataToProps = (state) => {
    return {profile: state.profileReducer.profile};
}

const urlDateWithRouter = withRouter(ProfileContainer);

export default connect(mapStataToProps, {getProfileForCurrentUser})(urlDateWithRouter);
