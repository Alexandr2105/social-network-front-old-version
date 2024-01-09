import {connect} from "react-redux";
import {followOrUnfollowShowStatus, getUsers, setClickButton} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage);
    }

    activePage = (p) => {
        this.props.getUsers(p);
    }

    render() {
        return <Users pagesCount={this.props.pagesCount} currentPage={this.props.currentPage} users={this.props.users}
                      activePage={this.activePage} isClickButton={this.props.isClickButton}
                      setClickButton={this.props.setClickButton} isFetching={this.props.isFetching}
                      followOrUnfollowShowStatus={this.props.followOrUnfollowShowStatus}/>
    }
}

const mapStateToPops = (state) => {
    return {
        users: state.usersReducer.users,
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        isClickButton: state.usersReducer.isClickButton,
    }
}

export default connect(mapStateToPops, {
    setClickButton, getUsers, followOrUnfollowShowStatus,
})(UsersContainer);