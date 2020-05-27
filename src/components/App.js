import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Bookings from "./Bookings";
import Shop from "./Shop";
import Adminform from "./Adminform";
import AdminLogin from "./Auth/AdminLogin";
import AdminSida from "./AdminSida";
import FirebaseTest from "./FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import UserProfile from "./AuthUser/UserProfile";
import UpdateProfile from "./AuthUser/UpdateProfile";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bookings" exact component={Bookings} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/adminform" exact component={Adminform} />
            <Route path="/adminlogin" exact component={AdminLogin} />
            <Route path="/adminsida" exact component={AdminSida} />

            <Route path="/adminsida" exact component={AdminSida}></Route>
            <Route path="/firebasetest" exact component={FirebaseTest}></Route>
            <Route path="/userprofile" exact component={UserProfile}></Route>

            <Route path="/userpage" exact component={UserPage}></Route>
            <Route path="/updateprofile" exact component={UpdateProfile}></Route>


          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;