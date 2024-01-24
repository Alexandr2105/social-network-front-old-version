import {createPost} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {getPosts} from "../../../redux/selectors/profileSelectors";

export class PostsContainer extends React.Component {
    render() {
        return <Posts posts={this.props.posts} createPost={this.props.createPost}/>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    };
}

export default compose(connect(mapStateToProps, {createPost}))(PostsContainer);