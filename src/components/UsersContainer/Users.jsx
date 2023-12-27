import React from "react";
import mod from "./Users.module.css"
import avatar from "../../assets/images/images.png"
import Preloader from "../../common/Preloader/Preloader";

const Users = (props) => {
    let arrayPages = [];
    for (let a = 1; a <= props.pagesCount; a++) {
        arrayPages.push(a);
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <div>
                <div className={mod.pages}>
                    {
                        arrayPages.map(p => (
                            <p key={p} className={props.currentPage === p ? mod.currentPage : ""}
                               onClick={() => props.activePage(p)}>{p}</p>))
                    }
                </div>
                <div>
                    {props.users.map(u => (
                            <div key={u.id} className={mod.user}>
                                <div className={mod.avatarAndButton}>
                                    <img src={u.avatar === null ? avatar : u.avatar} alt="avatar"/>
                                    <button
                                        onClick={() => u.follow ? props.unfollow(u.id) : props.follow(u.id)}>
                                        {u.follow ? "Follow" : "Unfollow"}
                                    </button>
                                </div>
                                <div className={mod.informationAboutUser}>
                                    <div className={mod.nameAndStatus}>
                                        <p>{u.fullName}</p>
                                        <p>{u.status}</p>
                                    </div>
                                    <div className={mod.location}>
                                        <p>{u.country},</p>
                                        <p>{u.city}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}


export default Users;