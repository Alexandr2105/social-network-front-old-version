import React from "react";
import mod from "./Users.module.css"
import avatar from "../../assets/images/images.png"
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img
                                            src={u.profile === null || u.profile.avatar === null ? avatar : u.profile.avatar}
                                            alt="avatar"/>
                                    </NavLink>
                                    <button
                                        onClick={() => {
                                            if (u.follow) {
                                                axios.delete(`http://localhost:3001/followers/${u.id}`, {withCredentials: true}).then(response => {
                                                    if (response.status === 204) {
                                                        props.unfollow(u.id);
                                                    }
                                                })
                                            } else {
                                                axios.post(`http://localhost:3001/followers/${u.id}`, {}, {withCredentials: true}).then(response => {
                                                    if (response.status === 201) {
                                                        props.follow(u.id)
                                                    }
                                                })
                                            }
                                        }}>
                                        {u.follow ? "Follow" : "Unfollow"}
                                    </button>
                                </div>
                                <div className={mod.informationAboutUser}>
                                    <div className={mod.nameAndStatus}>
                                        <p>{u.fullName}</p>
                                        <p>{u.profile?.status}</p>
                                    </div>
                                    <div className={mod.location}>
                                        <p>{u.profile?.country}</p>
                                        <p>{u.profile?.city}</p>
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