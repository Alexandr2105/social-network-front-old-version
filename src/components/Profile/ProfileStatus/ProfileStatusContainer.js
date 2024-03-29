import React from "react";
import ProfileStatus from "./ProfileStatus";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus} from "../../../redux/selectors/profileSelectors";
import {saveStatus} from "../../../redux/profileReducer";
import {getAuthToken} from "../../../redux/selectors/headerSelectors";

class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status || "no status",
    }

    componentDidMount() {

    }

    activeEditMode = () => {
        this.setState({editMode: true});
    }

    deActiveEditMode = () => {
        this.setState({editMode: false});
        this.props.saveStatus(this.state.status,this.props.authToken);
    }

    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return <ProfileStatus state={this.state} activeEditMode={this.activeEditMode}
                              deActiveEditMode={this.deActiveEditMode} onChangeStatus={this.onChangeStatus}/>
    }
}

const mapStateToProps = (state) => {
    return {status: getStatus(state), authToken: getAuthToken(state)};
}

export default compose(connect(mapStateToProps, {saveStatus}))(ProfileStatusContainer)

