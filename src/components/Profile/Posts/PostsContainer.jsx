import React from "react";
import {addPostActionCreator, updateTextNewPostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    const state = props.store.getState();

    const updatePost = (text) => {
        props.store.dispatch(updateTextNewPostActionCreator(text));
    }

    const createPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return <Posts state={state} updatePost={updatePost} cratePost={createPost}/>
}

export default PostsContainer;