import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileForCurrentUser} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileForCurrentUser(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStataToProps = (state) => {
    return {profile: state.profileReducer.profile};
}

export default compose(connect(mapStataToProps, {getProfileForCurrentUser}), withRouter, withAuthRedirect)(ProfileContainer)
