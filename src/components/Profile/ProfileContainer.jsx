import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileForCurrentUser} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfileForCurrentUser(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStataToProps = (state) => {
    return {profile: state.profileReducer.profile, userId: state.loginReducer.id};
}

export default compose(connect(mapStataToProps, {getProfileForCurrentUser}), withRouter, /*withAuthRedirect*/)(ProfileContainer)
