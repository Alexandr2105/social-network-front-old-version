import React from "react";
import Post from "./Post/Post";
import mod from "./Posts.module.css"
import {reduxForm} from "redux-form";
import UniversalForm from "../../../common/UniversalForm/UniversalForm";

const Posts = (props) => {
    const posts = props.posts.map(p => (<Post key={p.id} message={p.message} likes={p.likes}/>))
    const form = (data) => {
        props.createPost(data.message);
    }

    return (
        <div className={mod.textArea}>
            <CreatePostsReducerForm onSubmit={form}/>
            {posts}
        </div>
    )
}

const CreatePostsReducerForm = reduxForm({form: "createPost"})(UniversalForm)

export default Posts;