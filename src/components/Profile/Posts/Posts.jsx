import React from "react";
import Post from "./Post/Post";
import mod from "./Posts.module.css"
import PostForm from "../PostForm/PostForm";

const Posts = (props) => {
    const posts = props.posts.map(p => (<Post key={p.id} message={p.message} likes={p.likes}/>))
    const form = (data) => {
        props.createPost(data.post);
        props.reset('textsForm');
    }

    return (
        <div className={mod.textArea}>
            <PostForm onSubmit={form}/>
            {posts}
        </div>
    )
}

export default Posts;