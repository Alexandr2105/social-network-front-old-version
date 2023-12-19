import React from "react";
import mod from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setState([
            {
                id: 1,
                fullName: "Alex S.",
                avatar: "https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg",
                follow: true,
                status: "I love programming",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                }
            }, {
                id: 2,
                fullName: "Victor A.",
                avatar: "https://i.pinimg.com/236x/42/99/69/4299698015b43062ca1f022416f53df6.jpg",
                follow: false,
                status: "I like play football",
                location: {
                    country: "Russia",
                    city: "Moscow"
                }
            }, {
                id: 3,
                fullName: "Max O.",
                avatar: "https://i.pinimg.com/236x/dd/f8/78/ddf87827dd19e5a841f1994688f84ce8.jpg",
                follow: true,
                status: "I love my new car",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                }
            }
        ])
    }

    return (
        <div>
            {props.users.map(u => (
                    <div key={u.id} className={mod.user}>
                        <img src={u.avatar} alt="avatar"/>
                        <div>
                            {u.follow ? <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                                <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                        </div>
                        <div>
                            <p>{u.fullName}</p>
                            <p>{u.status}</p>
                            <p>{u.location.country}</p>
                            <p>{u.location.city}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}


export default Users;