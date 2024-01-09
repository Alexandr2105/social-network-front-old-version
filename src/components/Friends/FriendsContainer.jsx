import {connect} from "react-redux";
import Friends from "./Friends";
import React from "react";

export class FriendsContainer extends React.Component{
    componentDidMount() {
    }

    render() {
        return <Friends sidebar={this.props.sidebar}/>
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarReducer.sidebar,
    }
}

export default connect(mapStateToProps,{})(FriendsContainer);