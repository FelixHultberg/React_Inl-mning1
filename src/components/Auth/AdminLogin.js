// register / login 
// conditional rendering
// state 

import React, { Component } from "react";
import axios from "axios";

class AdminLogin extends Component {

    //via props
    state = {
        condition: true,
        user: "",
        email: "",
        password: ""
    }


    updateUserState = (e) => {
        this.setState({ user: e.target.value })
    }

    updateEmailState = (e) => {
        this.setState({ email: e.target.value })
    }

    updatePasswordState = (e) => {
        this.setState({ password: e.target.value })
    }



    onClickRegister() {
        this.setState({ condition: false })
    }

    onClickLogin() {
        this.setState({ condition: true })
    }
    onSubmitLogin(e) {
        e.preventDefault();
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: e.target.elements.email.value,
                password: e.target.elements.password.value,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                //uppdatera state med response , localhost
                //this.props.userInfo(response.data.jwt)
                this.props.userCredential(response.data.user, response.data.jwt)
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
    }

    onSubmitRegister(e) {
        e.preventDefault();
        axios
            .post('http://localhost:1337/auth/local/register', {
                username: e.target.elements.username.value,
                email: e.target.elements.email.value,
                password: e.target.elements.password.value,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                //localhost eller state med response data
                this.props.userCredential(response.data.user, response.data.jwt)
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
    }
    render() {
        return (
            <div>
                {this.state.condition &&
                    <div className="form-container">
                        <h2>Login</h2> <br />
                        <form onSubmit={this.onSubmitLogin.bind(this)}>
                            <h3>E-mail</h3>
                            <input type="email" name="email" /> <br />
                            <h3>Password</h3>
                            <input type="password" name="password" /> <br />
                            <button>Login</button>

                        </form>

                    </div>

                }

                {!this.state.condition &&

                    <div className="form-container">
                        <h2>Register</h2> <br />
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <h3>Name</h3>
                            <input type="text" name="username" value={this.state.user} onChange={this.updateUserState} /> <br />
                            <h3>E-mail</h3>
                            <input type="email" name="email" value={this.state.email} onChange={this.updateEmailState} /> <br />
                            <h3>Password</h3>
                            <input type="password" name="password" value={this.state.password} onChange={this.updatePasswordState} /> <br />

                            <button>Register</button>

                        </form>
                    </div>

                }

                <button onClick={this.onClickLogin.bind(this)}>Login</button>
                <button onClick={this.onClickRegister.bind(this)}>Register</button>

            </div>
        )
    }
}

export default AdminLogin;