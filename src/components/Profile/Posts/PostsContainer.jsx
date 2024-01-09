import {createPost, onChangePost} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import React from "react";

export class PostsContainer extends React.Component {
    render() {
        return <Posts posts={this.props.posts} updateNewPost={this.props.updateNewPost}
                      onChangePost={this.props.onChangePost}
                      createPost={this.props.createPost}/>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        updateNewPost: state.profileReducer.updateNewPost,
    };
}

export default connect(mapStateToProps, {onChangePost, createPost})(PostsContainer)