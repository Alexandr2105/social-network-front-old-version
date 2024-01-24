import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileForCurrentUser} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfile} from "../../redux/selectors/profileSelectors";
import {getUserId} from "../../redux/selectors/headerSelectors";

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId !== this.props.userId) {
            this.props.history.push("/login");
        }
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStataToProps = (state) => {
    return {profile: getProfile(state), userId: getUserId(state)};
}

export default compose(connect(mapStataToProps, {getProfileForCurrentUser}), withRouter, /*withAuthRedirect*/)(ProfileContainer)
