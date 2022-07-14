import React from "react";
import './userCart.css'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onChange = (e) => {
    const cart = this.props.cart;
    cart[e.target.id].quantity = e.target.value
    this.props.updateCart(cart)
  }

  remove = (e) => {
    const cart = this.props.cart;
    cart.splice(e.target.id, 1)
    this.props.updateCart(cart)
  }

  render() {
    return(
      <div className="cartPage">

      <div className="head">
        <div><p>PRODUCT:</p></div>
        <div><p></p></div>
        <div><p>PRICE:</p></div>
        <div><p>QUANTITY:</p></div>
        <div><p>TOTAL PRICE:</p></div>
        <div><p></p></div>
      </div>

      {this.props.cart.map((product, index) => (

      <div className="item" id={product.name} key={index}>

        <div className="itemInfo" >
          {`${product.name}`}
        </div>

        <div className="itemInfo">
        </div>

        <div className="itemInfo">
          ${`${product.price}`}
        </div>

        <div className="itemInfo">
          <select onChange={this.onChange} name="quantity" id={index}>
            <option >{product.quantity}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>

        <div id={'item' + index} className="itemInfo">
          ${product.price * product.quantity}
        </div>

        <div className="itemInfo">
          <button id={index} onClick={this.remove}>Remove</button>
        </div>

      </div>
    ))}
      </div>
    )
  }
}

export default Cart