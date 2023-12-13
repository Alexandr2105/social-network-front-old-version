import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
    const posts = props.state.posts.map(p => (<Post message={p.message} likes={p.likes}/>))
    return (
        <div>
            {posts}
        </div>)
}

export default Posts;