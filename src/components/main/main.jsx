import React from "react";
import Checkout from "../checkout/checkout";
import SignIn from "../signIn/signIn";
import CartPage from "../userCart/cartPage";
import './main.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: 0,
      priority: 0
    }
  }

  componentDidMount() {
    this.setState({
      display: 'signIn'
    })
  }

  logIn = (data) => {
    this.setState({
      activeUser: data,
      cart: data.cart,
      display: 'cart',
      subtotal: this.findCartTotal(data.cart)
    })
  }

  updateCart = (data) => {
    this.setState({
      cart: data,
      subtotal: this.findCartTotal(data)
    })
  }

  findCartTotal = (cart) => {
    let x = 0;
    cart.map(item => x += item.price * item.quantity);
    return x.toFixed(2);
  }

  addDiscount = () => {
    this.setState({
      discount: 10
    })
  }

  toCart = () => {
    this.setState({
      display: 'cart'
    })
  }

  checkout = () => {
    this.setState({
      display: 'payment'
    })
  }

  setPriority = () => {
    this.setState({
      priority: 0
    })
  }

  updateShipping = (data) => {
    this.setState({
      shippingInfo: data,
    })
  }

  updateCardInfo = (data) => {
    this.setState({
      cardInfo: data,
    })
  }

  updatePriority = (data) => {
    this.setState({
      priority: data
    })
  }

  render() {
    return(
      <div id="main">
        {this.state.display === 'signIn' ? <SignIn logIn={this.logIn}/> : <></>}
        {this.state.display === 'cart' ? <CartPage cart={this.state.cart} updateCart={this.updateCart} subtotal={this.state.subtotal} addDiscount={this.addDiscount} discount={this.state.discount} checkout={this.checkout}/> : <></>}
        {this.state.display === 'payment' ? <Checkout cart={this.state.cart} subtotal={this.state.subtotal} discount={this.state.discount} priority={this.state.priority} goBack={this.toCart} updateShipping={this.updateShipping} updatePriority={this.updatePriority} updateCardInfo={this.updateCardInfo}/> : <></>}
      </div>
    )
  }
}

export default Main