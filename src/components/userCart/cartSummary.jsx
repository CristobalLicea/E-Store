import React from "react";
import './userCart.css'

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onClick = () => {
    if(this.props.subtotal != 0) {
      this.props.checkout()
    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      promo: e.target.value
    })
  }

  addPromo = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    if(this.state.promo === 'SAVE10'){
      this.props.addDiscount()
    } else {
      console.log('invalid')
    }
  }

  render() {
    return(
      <div className="cartSummary">

          <form action="">

          <div className="cartBox">
            <h3>SUMMARY</h3>
          </div>

          <div className="cartBox">
            <p>Do you have a promo code?</p>
            <label htmlFor=""></label><input id="discountCode" type="text" name="promo" onChange={this.onChange} placeholder="Use code: SAVE10" autoComplete="off"/><button onClick={this.addPromo} type="button" className="promoSubmit">APPLY</button>
          </div>

          <div className="cartBox" >
            <div>
              <p>Cart Sub-Total:</p>
              <p className="totals">${this.props.subtotal}</p>
            </div>
            <div>
              <p>Shipping and Handling:</p>
              <p>-</p>
            </div>
            <div>
              <p>Discount:</p>
              <p>${this.props.discount}</p>
            </div>
            <div>
              <h3>Cart Total:</h3>
              <p className="totals" id="cartTot">${(this.props.subtotal - this.props.discount).toFixed(2)}</p>
            </div>
          </div>
          
          </form>

          <div className="cartBox">
            <button onClick={this.onClick} className={this.props.subtotal == 0 ? 'submitOff' : 'submit'}>CHECKOUT</button>
          </div>

        </div>
    )
  }
}

export default CartSummary