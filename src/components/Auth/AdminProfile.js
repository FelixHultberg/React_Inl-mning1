import React, { Component } from "react";

class AdminProfile extends Component {

    logOut() {
        localStorage.clear();
        window.location.reload(false);
    }
    render() {
        return (
            <div className="adminPage">
                <h2>Profile info:</h2> {this.props.userData} <br />

                <button onClick={this.logOut.bind(this)}> Logout</button>

            </div>
        )
    }
}

export default AdminProfile;