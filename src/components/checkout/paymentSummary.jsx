import React from "react";
import './shipping.css'

class PaymentSummary extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
    }
  }

  onClick = (e) => {
    e.preventDefault();
    if(this.props.complete) {
      this.props.updateCardInfo()
    }
  }

  render() {
    return(
      <div className="aside">

            <h3>Summary</h3>
            <div className="cartList2">
              {this.props.cart.map((product, index) => (
                <div className="itemBox" key={index}>
                <div><p><strong>{`${product.name}`}</strong></p></div>
                <div><p>Qty: {`${product.quantity}`}</p></div>
                <div><p>Price: {`${product.price}`}</p></div>
                <div><p><strong>{`${product.quantity * product.price}`}</strong></p></div>
                </div>))}
            </div>
            <div className="currentSummary2">
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
            <div className="details">
                <div>
                  <p>{this.props.shipTo.country}</p>
                  <p>{this.props.shipTo.city}</p>
                  <p>{this.props.shipTo.state}</p>
                  <p>{this.props.shipTo.address}</p>
                </div>
                <div>
                  <p>Shipping Method:</p>
                  <p>{this.props.shipping}</p>
                </div>
            </div>

            <div>
              <button onClick={this.onClick} type='button' id={this.props.complete ? 'checkout' : 'checkoutOff'}>${((this.props.subtotal - this.props.discount) + this.props.priority).toFixed(2)}</button>
            </div>

      </div>
    )
  }

}

export default PaymentSummary