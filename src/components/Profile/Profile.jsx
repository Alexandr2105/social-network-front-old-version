import React from "react";

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="img"/>
            </div>
            <div>
                {<img src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg" alt="avatar"/>}
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    );
}

export default Profile;