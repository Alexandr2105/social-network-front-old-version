import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {updateProfileActionCreator} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get("https://back-end-for-social-network.vercel.app/profile/10").then(response => {
            this.props.updateProfileActionCreator(response.data);
        })
    }

    render() {
        return (<Profile profile={this.props.profile}/>)
    }
}

const mapStataToProps = (state) => {
    return {profile: state.profileReducer.profile};
}

export default connect(mapStataToProps, {updateProfileActionCreator})(ProfileContainer)
