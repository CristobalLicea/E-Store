import React from "react";
import './shipping.css'
import { valid } from "./valid";

class ShippingForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      address: '',
      zipcode: '',
      state: '',
      city: '',
      country: '',
      cell: '',
      phone: ''
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    if(valid(name, value)) {
      this.setState((prevState) => ( { ...prevState, [name]: value } ));
    }
    this.props.fillForm(name, value)
  }

  updateShipping = (e) => {
    if(e.target.value === 'express') {
      this.props.updatePriority(5)
    } else if(e.target.value === 'standard') {
      this.props.updatePriority(0)
    }
  }

  goBack = () => {
    this.props.goBack()
  }

  render() {
    return(
      <div className="form">
            <h2>SHIPPING INFORMATION</h2>

              <div className="input">
                <label htmlFor=""><strong>Address Title</strong></label>
                <input required autoComplete="off" type="text" />
              </div>

              <div className="input">
                <label htmlFor=""><strong>Name*</strong><span className="error" id="nameErr"></span></label>
                <input onChange={this.onChange} required autoComplete="off" type="text" name="name" value={this.state.name}/>
              </div>

              <div className="input">
                <label htmlFor=""><strong>Your Address*</strong></label>
                <input onChange={this.onChange} required autoComplete="off" type="text" name="address" value={this.state.address} />
              </div>

              <div className="shippingInput3">
                <label htmlFor="" className="start"><strong>Zip Code*</strong></label>
                <input onChange={this.onChange} className={!this.state.zipErr ? 'smallInput' : 'errBox'} required autoComplete="off" type="text" name="zipcode" maxLength='5' value={this.state.zipcode}id="zipBox" />
                <label htmlFor="" className="side"><strong>Country*</strong></label>
                <input onChange={this.onChange} className="smallInput" required autoComplete="off"  type="text" name="country" value={this.state.country}/>
                <label htmlFor="" className="side"><strong>City*</strong></label>
                <input onChange={this.onChange} className="smallInput" required autoComplete="off"  type="text" name="city" value={this.state.city}/>
                <label htmlFor="" className="side"><strong>State*</strong></label>
                <input onChange={this.onChange} className="smallInput" required autoComplete="off"  type="text" name="state" value={this.state.state}/>
              </div>

              <div className="input">
                <label htmlFor=""><strong>Cell Phone *</strong><span className="error" id="cellErr"></span></label>
                <input onChange={this.onChange} required autoComplete="none" type="text" name='cell' maxLength='10' value={this.state.cell}/>
              </div>

              <div className="input" >
                <label htmlFor=""><strong>Telephone</strong><span className="error" id="telErr"></span></label>
                <input onChange={this.onChange} autoComplete="none" type="text" name="phone" maxLength='10' value={this.state.phone} />
              </div>

              <div>
                <h2>SHIPPING METHOD</h2>
                <input defaultChecked onClick={this.updateShipping} type="radio" name="shippingType" id="standard" value ="standard" /><label htmlFor=""><strong>Standard</strong> Delivery in 4 - 8 business days - Free ($40 Min.)</label><br />
                <br />
                <input onClick={this.updateShipping} type="radio" name="shippingType" id="express" value ="express" /><label htmlFor=""><strong>Express</strong> Delivery in 1 - 3 business days - $5.00</label> <br />
              </div>
                <button onClick={this.goBack} type="button" className="backToCart">BACK TO CART</button>
          </div>
    )
  }

}

export default ShippingForm