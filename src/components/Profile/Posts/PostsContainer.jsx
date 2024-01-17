import {createPost} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";

export class PostsContainer extends React.Component {
    render() {
        return <Posts posts={this.props.posts} createPost={this.props.createPost}/>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
    };
}

export default compose(connect(mapStateToProps, {createPost}))(PostsContainer);