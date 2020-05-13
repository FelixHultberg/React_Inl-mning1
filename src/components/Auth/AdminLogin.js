// register / login 

import React, { Component } from "react";
import axios from "axios";

class AdminLogin extends Component {

    //via props
    state = {
        condition: true,
        user: ""
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

                this.props.userCredential(response.data.user, response.data.jwt);
                window.location.reload(false);
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
            .then((response) => {
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
                {this.props.test}
                {this.state.condition &&
                    <div className="form-container">
                        <h2>Login</h2> <br />
                        <form onSubmit={this.onSubmitLogin.bind(this)}>
                            <label htmlFor="email">E-mail:</label><br />
                            <input type="email" name="email" /> <br />
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" name="password" /> <br />
                            <button>Login</button>
                        </form>
                        <button onClick={this.onClickRegister.bind(this)}>Register</button>
                    </div>

                }

                {!this.state.condition &&

                    <div className="form-container">
                        <h2>Register</h2> <br />
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <label htmlFor="email">E-mail:</label><br />
                            <input type="text" name="username" /> <br />
                            <label htmlFor="username">Username:</label><br />
                            <input type="email" name="email" /> <br />
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" name="password" /> <br />
                            <button>Register</button>
                        </form>
                        <button onClick={this.onClickLogin.bind(this)}>Login</button>
                    </div>
                }

            </div>
        )
    }
}

export default AdminLogin;