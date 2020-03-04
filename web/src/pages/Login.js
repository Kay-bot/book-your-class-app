import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";

class Login extends Component {
  handleLoginClick(email, password) {
    this.props.user.login(email, password);
  }
  render() {
    return (
      <LoginForm
        errMessage={this.props.user.loginErrorMessage}
        login={(email, password) => this.handleLoginClick(email, password)}
      ></LoginForm>
    );
  }
}

export default Login;
