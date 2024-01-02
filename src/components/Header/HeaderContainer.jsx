import React from "react";
import {connect} from "react-redux";
import {setAuthState} from "../../redux/loginReducer";
import axios from "axios";
import Header from "./Header";
import {settings} from "../../common/settings";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`${settings.BACK_ADDRESS}/auth/me`, {withCredentials: true}).then(response => {
            const {id, fullName, email} = response.data;
            if (response.status === 200) {
                this.props.setAuthState(id, fullName, email);
            }
        });
    }

    // componentDidMount() {
    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE3MDM4NTEwODIsImV4cCI6MTcwMzg1Mjg4Mn0.NurvLFtlvQ656AvRvVumbUh034lZPqthMijbjh3IvQw"
    //     axios.get("http://localhost:3001/auth/me", {headers: {Authorization: `Bearer ${token}`}}).then(response => {
    //         const {id, fullName, email} = response.data;
    //         if(response.status===200){
    //             this.props.setAuthState(id, fullName, email);
    //         }
    //     });
    // }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.loginReducer.id,
        fullName: state.loginReducer.fullName,
        email: state.loginReducer.email,
        isAuth: state.loginReducer.isAuth,
    }
}

export default connect(mapStateToProps, {setAuthState})(HeaderContainer);