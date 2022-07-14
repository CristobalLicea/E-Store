import React from "react";
import './shipping.css'

class ShippingSummary extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
    }
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.submit()
  }

  render() {
    return(
      <div className="aside">
          <h3>SUMMARY</h3>
          <div className="cartList">
            {this.props.cart.map((product, index) => (
            <div className="itemBox" key={index}>
              <div><p><strong>{`${product.name}`}</strong></p></div>
              <div><p>Qty: {`${product.quantity}`}</p></div>
              <div><p>Price: {`${product.price}`}</p></div>
              <div><p><strong>{`${product.quantity * product.price}`}</strong></p></div>
          </div>))}
          </div>
          <div className="currentSummary">
            <div className="totalSummary">
              <p>Cart Sub-Total:</p>
              <p>${this.props.subtotal}</p>
            </div>
            <div className="totalSummary">
              <p>Shipping and Handling:</p>
              <p className="shippingTax">${this.props.priority}</p>
            </div>
            <div className="totalSummary">
              <p>Discount:</p>
              <p>${this.props.discount}</p>
            </div>
            <div className="totalSummary">
              <h3>Cart Total:</h3>
              <p className="totals">${((this.props.subtotal - this.props.discount) + this.props.priority).toFixed(2)}</p>
            </div>
          </div>
          <div>
            <button onClick={this.onClick} type="submit" id={this.props.complete ? 'checkout' : 'checkoutOff'}>CHECKOUT</button>
          </div>
        </div>
    )
  }

}

export default ShippingSummary