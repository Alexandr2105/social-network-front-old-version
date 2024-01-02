import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {settings} from "../../common/settings";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        axios.get(`${settings.BACK_ADDRESS}/profile/${userId}`).then(response => {
            this.props.setProfile(response.data);
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
