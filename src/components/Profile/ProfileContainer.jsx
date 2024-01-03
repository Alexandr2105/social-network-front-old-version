import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        profileAPI.getProfileForCurrentUser(userId).then(data => {
            this.props.setProfile(data);
        })
    }

    render() {
        return (<Profile profile={this.props.profile}/>)
    }
}

const mapStataToProps = (state) => {
    return {profile: state.profileReducer.profile};
}

const urlDateWithRouter = withRouter(ProfileContainer);

export default connect(mapStataToProps, {setProfile})(urlDateWithRouter);
