import React from "react";
import ProfileStatus from "./ProfileStatus";
import {compose} from "redux";
import {connect} from "react-redux";
import {saveStatus} from "../../../redux/profileReducer";
import {getStatus} from "../../../redux/selectors/profileSelectors";

class ProfileStatusContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <ProfileStatus status={this.props.status} saveStatus={this.props.saveStatus}/>
    }
}

const mapStateToProps = (state) => {
    return {status: getStatus(state)};
}

export default compose(connect(mapStateToProps, {saveStatus}))(ProfileStatusContainer)

