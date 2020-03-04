import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Lessons from "./pages/Lessons";
import SingleLesson from "./pages/SingleLesson";

import Checkout from "./bookings/Checkout";
import Cart from "./bookings/Cart";

class Routes extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      toHomepage: false,
      isLoggedIn: !!auth ? true : false,
      currentUser: null,
      currentUserId: null,
      loginErrorMessage: ""
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    console.log(auth);
    if (!auth) return;
    axios
      .get(`/users/${auth.userId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then((response) => {
        this.setState({
          currentUser: response.data,
          currentUserId: auth.userId,
          isLoggedIn: true,
          toHomepage: true
        });
        //to redirect to homepage/lessons once logged in
      });
  };

  handleLogin = (email, password) => {
    axios
      .post(`/login`, {
        email: email,
        password: password
      })
      .then((response) => {
        sessionStorage.setItem("auth", JSON.stringify(response.data));
        this.getUser();
      })
      .catch((err) => {
        this.setState({
          loginErrorMessage: "Fail to login. Pleaes try again!"
        });
        //to redirect to "/register" if don't have account
      });
  };

  handleLogout = () => {
    sessionStorage.setItem("auth", null);
    this.setState({ currentUser: null, isLoggedIn: false });
  };
  render() {
    const userDetails = {
      isLoggedIn: this.state.isLoggedIn,
      loginErrorMessage: this.state.loginErrorMessage,
      currentUser: this.state.currentUser,
      currentUserId: this.state.currentUserId,

      logout: () => this.handleLogout(),
      login: (email, password) => this.handleLogin(email, password)
    };

    return (
      <BrowserRouter>
        <Navbar user={userDetails} />
        <Switch>
          <Route exact path="/" component={Lessons} user={userDetails} />
          <Route
            exact
            path="/lessons/:id"
            component={SingleLesson}
            user={userDetails}
          />
          <Route exact path="/cart" component={Cart} user={userDetails} />
          <Route
            exact
            path="/checkout"
            component={Checkout}
            user={userDetails}
          />
          <Route
            exact
            path="/login"
            component={() => <Login user={userDetails} />}
          />
          <Route
            exact
            path="/register"
            component={Register}
            user={userDetails}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
