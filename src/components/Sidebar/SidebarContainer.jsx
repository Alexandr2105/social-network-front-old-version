import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import React from "react";

export class SidebarContainer extends React.Component {
    render() {
        return <Sidebar sidebar={this.props.sidebar}/>
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarReducer.sidebar,
    }
}

export default connect(mapStateToProps)(SidebarContainer);