import React, { Component } from "react";
import "../styles/form.css";
import axios from "axios";
import {
  Wrapper,
  SectionWrapper,
  CartHeader,
  H4,
  Row
} from "../styles/CartStyled";
let auth = JSON.parse(sessionStorage.getItem("auth"));
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 1,
      values: {
        photo: "",
        first_name: "",
        last_name: "",
        phone: "",
        user_id: 4,
        account_id: 2
      },
      isSubmitting: false,
      isError: false
    };
  }

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
        this.setState({ cart: result.data, total: 1 });
      });
  }

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  postClientDetails = async (e) => {
    alert("A class was submitted");
    e.preventDefault(e);
    this.setState({ isSubmitting: true });
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    const res = await fetch(`/clients`, {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: { Authorization: `Bearer ${auth.token}` }
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: {
            photo: "",
            first_name: "",
            last_name: "",
            phone: "",
            user_id: auth.userId,
            account_id: 2
          }
        }),
      1600
    );
  };

  postPayment = () => {
    const payment = {
      payment_number: "xxxx-xxxx-xxxx-7890",
      status: "Paid",
      date: "Sat, 15 Feb",
      cost: "",
      service: "",
      booking_id: "",
      account_id: ""
    };
    axios
      .post(
        `/lesson_payments`,
        {
          ...payment
        },
        {
          headers: { Authorization: `Bearer ${auth.token}` }
        }
      )
      .then((response) => {
        console.log("Payment created");
      })
      .catch((error) => {
        console.log("Payment error!");

        console.log(error);
      });
  };

  render() {
    return (
      <Wrapper>
        <SectionWrapper>
          <CartHeader>
            <H4>Your Class</H4>
          </CartHeader>
          <Row>
            {this.state.cart ? (
              <div>
                <div>
                  <b>Booking status: </b>
                  {this.state.cart.status}
                </div>
                <div>
                  <b>Lesson:</b> {this.state.cart.title}
                </div>
                <div>
                  <b>Cost:</b> $ {this.state.cart.cost}
                </div>
                <div>
                  <b>Date:</b> {this.state.cart.start}
                </div>
              </div>
            ) : (
              <p>No booking details</p>
            )}
          </Row>
        </SectionWrapper>
        <SectionWrapper>
          <CartHeader>
            <H4>Your Details</H4>
          </CartHeader>
          <Row>
            <form onSubmit={this.postClientDetails}>
              <div className="input-group">
                <label htmlFor="first_name">Firs name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={this.state.values.first_name}
                  onChange={this.handleInputChange}
                  title="first_name"
                  required
                  placeholder="Enter first name"
                  className="input-box"
                />
              </div>
              <div className="input-group">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={this.state.values.last_name}
                  onChange={this.handleInputChange}
                  title="last_name"
                  required
                  placeholder="Enter last name"
                  className="input-box"
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Mobile Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={this.state.values.phone}
                  onChange={this.handleInputChange}
                  title="phone"
                  required
                  placeholder="xxxx-xxx-xxx"
                  className="input-box"
                />
              </div>
              <button className="submit-btn-2" type="submit">
                Submit
              </button>
            </form>
            <div className={`message ${this.state.isError && "error"}`}>
              {this.state.isSubmitting ? "Submittisng..." : this.state.message}
            </div>
          </Row>
        </SectionWrapper>
        <SectionWrapper>
          <CartHeader>
            <H4>Payment</H4>
          </CartHeader>
          <Row>
            <div>
              <form>
                <div className="input-group">
                  <label htmlFor="card">Card Details</label>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    required
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    className="input-box"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="csv">CSV*</label>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    required
                    placeholder="xxx"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="exp">Expiry date</label>
                  <input
                    type="text"
                    name="exp"
                    id="exp"
                    onChange={this.handleInputChange}
                    title="exp"
                    required
                    placeholder="DD-MM-YY"
                  />
                </div>
                <button className="submit-btn-2" onClick={this.postPayment}>
                  Submit
                </button>
              </form>
            </div>
          </Row>
        </SectionWrapper>
      </Wrapper>
    );
  }
}
export default Checkout;
