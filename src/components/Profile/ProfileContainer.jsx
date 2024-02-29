import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileForCurrentUser} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfile} from "../../redux/selectors/profileSelectors";
import {getAuthToken, getUserId} from "../../redux/selectors/headerSelectors";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfileForCurrentUser(userId, this.props.authToken);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId !== this.props.userId) {
            this.props.history.push("/login");
        }
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStataToProps = (state) => {
    return {profile: getProfile(state), userId: getUserId(state), authToken: getAuthToken(state)};
}

export default compose(connect(mapStataToProps, {getProfileForCurrentUser}), withRouter, /*withAuthRedirect*/)(ProfileContainer)
