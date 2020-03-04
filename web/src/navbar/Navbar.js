import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { animated } from "react-spring";
import Brand from "./Brand";

class Navbar extends Component {
  handleLogoutClick(event) {
    event.preventDefault();
    this.props.user.logout();
  }
  render() {
    const user = this.props.user;
    return (
      <>
        <NavBar>
          <FlexContainer>
            <Link to="/">
              <Brand />
            </Link>

            <NavLinks>
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
              {!user.isLoggedIn ? <Link to="/login">Login</Link> : null}
              {user.isLoggedIn && user.currentUser ? (
                <React.Fragment>
                  <Link to="">You're logged in!</Link>
                  <Link to="" onClick={(e) => this.handleLogoutClick(e)}>
                    Logout
                  </Link>
                </React.Fragment>
              ) : null}
            </NavLinks>
          </FlexContainer>
        </NavBar>
      </>
    );
  }
}

export default Navbar;

const NavBar = styled(animated.nav)`
  /* position: fixed; */
  width: 100%;
  top: 0;
  left: 0;
  background: silver;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: palevioletred;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: pink;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
