import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Cart extends Component {
  state = {
    bookings: [],
    total: 1
  };

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart || "{}");
    console.log(cart);
    if (!cart) return;
    let bookingId = cart.id;
    axios
      .get(`/bookings/${bookingId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then((result) => {
        this.setState({ bookings: result.data, total: 1 });
      });
  }

  removeFromCart = (booking) => {
    let bookings = this.state.bookings.filter((item) => item.id !== booking.id);
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[booking.id.toString()];
    localStorage.setItem("cart", JSON.stringify(cart));
    let total = this.state.total - booking.qty * booking.cost;
    this.setState({ bookings, total });
  };
  clearCart = () => {
    localStorage.removeItem("cart");
    this.setState({ booking: [] });
  };

  render() {
    return (
      <div>
        <h3>Cart</h3>
        {this.state.bookings ? (
          <div>
            <div>Booking status: {this.state.bookings.status}</div>
            <div>Lesson: {this.state.bookings.title}</div>
            <div>Cost: $ {this.state.bookings.cost}</div>
            <div>Date: {this.state.bookings.date}</div>
          </div>
        ) : (
          <p>No booking details</p>
        )}
        <Link to="/checkout">
          <button className="btn btn-success float-right">Checkout</button>
        </Link>
        <button
          className="btn btn-danger float-right"
          onClick={this.clearCart}
          style={{ marginRight: "10px" }}
        >
          Clear Cart
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Cart;
