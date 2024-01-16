import React from "react";
import mod from "./Profile.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activeEditMode = () => {
        this.setState({editMode: true});
    }

    deActiveEditMode = () => {
        this.setState({editMode: false});
        this.props.saveStatus(this.state.status);
    }

    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return (
            <div className={mod.status}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.state.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input placeholder="Введите текст" autoFocus={true} onBlur={this.deActiveEditMode}
                               onChange={this.onChangeStatus} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;