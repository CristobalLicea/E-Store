import React from "react";
import './userCart.css'
import CartSummary from "./cartSummary";
import Cart from "./userCart";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="summary">
        <div >
          <Cart cart={this.props.cart} updateCart={this.props.updateCart}/>
        </div>
          <CartSummary subtotal={this.props.subtotal} addDiscount={this.props.addDiscount} discount={this.props.discount} checkout={this.props.checkout}/>
      </div>
    )
  }
}

export default CartPage