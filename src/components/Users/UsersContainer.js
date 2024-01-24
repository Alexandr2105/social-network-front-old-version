import {connect} from "react-redux";
import {followOrUnfollowShowStatus, users, setClickButton} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {compose} from "redux";
import {getClickButton, getCurrentPage, getFetching, getPageCount, getUsers} from "../../redux/selectors/usersSelectors";

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
        users: getUsers(state),
        pagesCount: getPageCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        isClickButton: getClickButton(state),
    }
}

export default compose(connect(mapStateToPops, {
    setClickButton, getUsers: users, followOrUnfollowShowStatus,
}))(UsersContainer);