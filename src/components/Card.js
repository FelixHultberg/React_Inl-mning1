import React, { Component } from "react";
import firebase from './FirebaseConfig';
// import { Link } from "react-router-dom";

class Card extends Component {

    state = {
        user: null || localStorage.getItem("user")
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ user: user.email })
                }
            })
    }

    onClickSaveProduct() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);
        console.log(user.displayName);


        const docRef = firebase.firestore().collection("User products").doc(user.displayName.toString())
            .collection("products").doc(this.props.id.toString());

        docRef.set({
            id: this.props.id,
            title: this.props.title,
            price: this.props.price
        })
    }


    render() {
        const loggedIn = this.state.user || localStorage.getItem("user");
        return (

            <div className="card">
                <img src={this.props.image} alt="Card" />
                <div className="card-info">
                    <h5>{this.props.title}</h5>
                    {/* <p>{props.description}</p> */}
                    <div className="card-book">
                        {loggedIn
                            ? <button button className="buy-button" onClick={this.onClickSaveProduct.bind(this)}>
                                Buy </button>

                            : <input type="button" className="buy-button" onclick="location.href='https://google.com';" value="Go to Google" />



                        }
                        <div>
                            <p><span>{this.props.price}</span> kr</p>
                        </div>
                    </div>
                </div>
            </div >



        )

    }

}

export default Card;