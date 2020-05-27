import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
// import { render } from "@testing-library/react";

class Navbar extends Component {
   state = {
      loggedIn: null || localStorage.getItem("user")
   }
   render() {
      const loggedIn = this.state.user || localStorage.getItem("jwt");
      return (
         <nav>
            <Link to="/"><img className="navbar-logo" src={Logo} alt="Logo" /></Link>
            <ul className="navbar-links">
               <Link style={{ textDecoration: 'none' }} to="/"><li>Home</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/bookings"><li>My Bookings</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/shop"><li>Shop</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/userpage"><li>User Page</li></Link>

               <div className="login-links">
                  <Link style={{ textDecoration: 'none' }} to="/AdminSida"><li>Admin Sida</li></Link>
               </div>

               {loggedIn ?
                  <Link style={{ textDecoration: 'none' }} to="/adminform"><li>Adminform</li></Link>
                  :
                  <div></div>
               }
            </ul>
         </nav>
      );
   }
}

export default Navbar;