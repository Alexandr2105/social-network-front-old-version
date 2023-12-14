import React from "react";
import Post from "./Post/Post";
import TextAreaAndButton from "../../TextAreaAndButton/TextAreaAndButton";
import {addPostActionCreator, updateTextNewPostActionCreator} from "../../../redux/profileReducer";

const Posts = (props) => {

    const posts = props.state.posts.map(p => (<Post message={p.message} likes={p.likes}/>))

    return (
        <div>
            <TextAreaAndButton dispatch={props.dispatch} value={props.state.updateNewPost}
                               create={addPostActionCreator} update={updateTextNewPostActionCreator}/>
            {posts}
        </div>)
}

export default Posts;