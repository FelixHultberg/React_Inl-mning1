// testa skapa:  Dashboard
//admin profile
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import firebase from "../FirebaseConfig";

//navigate("/userprofile")



class UserProfile extends Component {

    state = {

        username: "",
        email: ""
    }

    state = {
        products: null
    }

    componentDidMount() {

        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);

        var user = firebase.auth().currentUser;

        console.log(user);
        console.log(user.displayName);


        const docRef = firebase.firestore().collection("User products").doc(user.displayName.toString())
            .collection("products");

        docRef.get().then(snapshot => {
            const products = []
            snapshot.forEach(doc => {
                const data = doc.data()
                products.push(data)
            })
            this.setState({ products: products })
        })

    }

    logOut() {

        localStorage.clear();
        window.location.reload(false);
        //
        firebase.auth().signOut();
    }
    //hämta data från firebase
    // profilbild8
    // radera kontot
    // finnas på databasen
    // raderar dem
    // fråga användare 
    // Varna användare ifall det finns bokingar 

    //edit på deras profile info

    deleteAccount() {
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);

        if (user) {
            user.delete().then(function () {
                // User deleted.
                localStorage.clear();
                window.location.reload(false);
            }).catch(function (error) {
                // An error happened.
            });

        }


    }
    render() {
        return (
            <div>
                <h1> Profile info: {this.props.userData} </h1> <br /> <br />
                <h2>User Products:</h2> <br />
                {
                    this.state.products &&
                    this.state.products.map(product => {
                        return (

                            <div className="product-container">
                                <h3>{product.title}</h3>
                                <h4>{product.price} kr</h4>
                                <br />
                            </div>
                        )
                    })
                }



                <button onClick={this.deleteAccount.bind(this)}> Radera konto</button> <br /> <br />
                <button onClick={this.logOut.bind(this)}> Logout</button>
                <Link
                    to={{
                        pathname: "/updateprofile",
                        params: {
                            username: this.state.username,
                            email: this.state.email
                        }
                    }}
                >
                    <button>Edit Profile</button>
                </Link>
            </div>

        )
    }
}


export default UserProfile;


// kontaktförmuläret till din email 