import React from "react";
import Confirmation from "./confirmation";
import ConfirmationSummary from "./confirmationSummary";
import PaymentForm from "./paymentForm";
import PaymentSummary from "./paymentSummary";
import './shipping.css'
import ShippingForm from "./shippingForm";
import ShippingSummary from "./shippingSummary";

class Checkout extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      display: 'addressForm',
      shipping: 'Standard',
      shippingComplete: false,
      payformComplete: false,
      shipTo: {
        name: '',
        address: '',
        city: '',
        state: '',
        cell: '',
        zipcode: ''
      },
      cardInfo: {
        cardHolder: '',
        cardNumber: '',
        month: '',
        year: '',
        securityCode: '',
      }
    }
  }

  fillForm = (name, value) => {
    this.setState((prevState) => ({ shipTo: { ...prevState.shipTo, [name]: value } }));
    if(this.state.shipTo.name.length && this.state.shipTo.address.length && this.state.shipTo.city.length && this.state.shipTo.state.length && this.state.shipTo.cell.length && this.state.shipTo.zipcode.length) {
      this.setState({
        shippingComplete: true
      })
    }
  }

  fillCard = (name, value) => {
    this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: value } }));
    if(this.state.cardInfo.cardHolder.length && this.state.cardInfo.cardNumber.length && this.state.cardInfo.securityCode.length) {
      this.setState({
        payformComplete: true
      })
    }
  }

  showShippingForm = () => {
    this.setState({
      display: 'addressForm'
    })
  }

  submitShipping = () => {
    if(this.state.shippingComplete) {
      this.setState({
        display: 'paymentForm'
      })
    this.props.updateShipping(this.state.shipTo)
    }
  }

  updatePriority = (data) => {
    console.log(data)
    if (data === 0) {
      this.setState({
        shipping: 'Standard'
      })
    } else if (data === 5) {
      this.setState({
        shipping: 'Express'
      })
    }
    
    this.props.updatePriority(data)
  }

  updateCardInfo = () => {
    this.props.updateCardInfo(this.state.cardInfo)
    this.setState({
      display: 'confirmation'
    })
  }

  render() {
    return(
      <form action="">
      <div className="full">
        
        <div className="main">

          <div className="progress">
            <div id="bar">
              <div className="barQuarter">Cart</div>
              <div className="barQuarter" id={this.state.display === 'addressForm' ? 'active' : ''}>Shipping</div>
              <div className="barQuarter" id={this.state.display === 'paymentForm' ? 'active' : ''}>Payment</div>
              <div className="barQuarter" id={this.state.display === 'confirmation' ? 'active' : ''}>Confirmation</div>
            </div>
          </div>

          {this.state.display === 'addressForm' ? <ShippingForm fillForm={this.fillForm} goBack={this.props.goBack} updatePriority={this.updatePriority} /> : <></>}
          {this.state.display === 'paymentForm' ? <PaymentForm fillCard={this.fillCard} goBack={this.showShippingForm} /> : <></>}
          {this.state.display === 'confirmation' ? <Confirmation discount={this.props.discount} subtotal={this.props.subtotal} priority={this.props.priority} home={this.props.goBack}/> : <></>}
          
        </div>
        
        {this.state.display === 'addressForm' ? <ShippingSummary cart={this.props.cart} discount={this.props.discount} subtotal={this.props.subtotal} priority={this.props.priority} submit={this.submitShipping} complete={this.state.shippingComplete}/> : <></>}
        {this.state.display === 'paymentForm' ? <PaymentSummary cart={this.props.cart} discount={this.props.discount} subtotal={this.props.subtotal} shipping={this.state.shipping} priority={this.props.priority} goBack={this.showShippingForm} shipTo={this.state.shipTo} updateCardInfo={this.updateCardInfo} complete={this.state.payformComplete}/> : <></>}
        {this.state.display === 'confirmation' ? <ConfirmationSummary cart={this.props.cart} discount={this.props.discount} subtotal={this.props.subtotal} shipping={this.state.shipping} priority={this.props.priority} shipTo={this.state.shipTo} card={this.state.cardInfo.cardNumber}/> : <></>}

      </div>
      </form>
    )
  
  }
}

export default Checkout