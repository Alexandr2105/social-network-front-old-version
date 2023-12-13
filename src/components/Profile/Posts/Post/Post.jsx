import React from "react";
import mod from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={mod.post}>
                {<img
                    src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
                    alt="avatar"/>}
                {props.message}
            </div>
            <p>Likes: {props.likes}</p>
        </div>
    )
}

export default Post;