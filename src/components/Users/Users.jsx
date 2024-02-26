import React from "react";
import mod from "./Users.module.css"
import avatar from "../../assets/images/images.png"
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const totalParts = Math.ceil(props.pagesCount / props.viewPages);

    const arrayPages = [];
    let fistPageNumber = (props.viewPages * props.state.part) - (props.viewPages - 1);
    let totalCurrentPartPages = (props.viewPages * props.state.part);
    if (totalCurrentPartPages > props.pagesCount) {
        totalCurrentPartPages = props.pagesCount;
    }

    for (let a = fistPageNumber; a <= totalCurrentPartPages; a++) {
        arrayPages.push(a);
    }


    return (
        <>
            {props.isFetching ? <Preloader/> :
                <div>

                    <div className={mod.pages}>
                        {props.state.part === 1 ? "" : <button onClick={props.onClickPrev}>prev</button>}
                        {
                            arrayPages.map(p => (
                                <p key={p} className={props.currentPage === p ? mod.currentPage : ""}
                                   onClick={() => props.activePage(p)}>{p}</p>))
                        }
                        {props.state.part >= totalParts ? "" : <button onClick={props.onClickNext}>next</button>}
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
                                            disabled={props.isClickButton.includes(u.id)}
                                            onClick={() =>
                                                props.followOrUnfollowShowStatus(u.id, u.follow)
                                            }>
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
            }
        </>
    )
}


export default Users;