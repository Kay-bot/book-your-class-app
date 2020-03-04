import React, { Component } from "react";
import "../styles/form.css";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { Card, Logo, Form, Input, Button } from "../forms/AuthForm";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    };
  }
  onSignupClick() {
    // TODO: validate inputs
    this.props.onSignup(this.state);
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({ password_confirmation: e.target.value });
  };

  render() {
    return (
      <Card>
        <Logo src={logo2} />
        <Form>
          <Input
            type="text"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="email"
          />
          <Input
            type="password"
            name="psw"
            required
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="password"
          />
          <Input
            type="password"
            name="psw-repeat"
            required
            value={this.state.password_confirmation}
            onChange={this.handleConfirmPasswordChange}
            placeholder="password again"
          />
          <Button onClick={() => this.onSignupClick()}>Register</Button>
        </Form>
        <Link to="/login">Already have an account?</Link>
      </Card>
    );
  }
}

export default RegisterForm;
