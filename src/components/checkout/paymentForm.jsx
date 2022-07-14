import React from "react";
import './shipping.css'

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: {
        cardNumber: '',
        cardHolder: '',
        month: '',
        year: '',
        securityCode: ''
      },
      error: {
        cardNumber: '',
      }
    }
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.goBack()
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    
    if (name === 'cardNumber') {
      let mask = e.target.value.split(' ').join('');
      if(mask.length) {
        mask = mask.match(new RegExp('.{1,4}', 'g')).join(' ');
        this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: mask } }));
        this.props.fillCard(name, mask)
        if(!/^[0-9 ]*$/i.test(value)) {
          this.setState((prevState) => ({ error: { ...prevState.error, [name]: "Can Only Include Numbers" } }));
        } else {
          this.setState((prevState) => ({ error: { ...prevState.error, [name]: "" } }));
        }
      } else {
        this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: '' } }));
        this.props.fillCard(name, '')
      }     
    } else if (name === 'cardHolder') {
      if (/^[a-zA-Z ]*$/i.test(value)) {
        this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: value } })); 
        this.props.fillCard(name, value)
      } else {
        this.setState((prevState) => ({ error: { ...prevState.error, [name]: "Can only include letters" } })); 
      }
    } else {
      this.setState((prevState) => ({ cardInfo: { ...prevState.cardInfo, [name]: value } })); 
      this.props.fillCard(name, value)
    }
    
  }

  findCardType = (cardNumber) => {
    const regexPattern = {
      MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
      VISA: /^4[0-9]{2,}/,
      AMERICAN_EXPRESS: /^3[47][0-9]{5,}/,
      DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/ 
    };
    for(const card in regexPattern) {
      if(cardNumber.replace(/[^\d]/g, '').match(regexPattern[card])) return card;
    }
    return '';  
  }
  
  render(){

    return(
      <div className="form">
            <h2>Payment Information</h2>
            
            <div className="input">
              <label htmlFor="">Cardholder Name</label>
              <input required type="text" name="cardHolder" id="cardHolder" autoComplete="off" onChange={this.onChange} onBlur={this.handleBlur} value={this.state.cardInfo.cardHolder} pattern="[A-Za-z\s]+" />
              <div id='holderErr'className="error">{this.state.error.name}</div>
            </div>
            <div className="input">
              <label htmlFor="">Card Number</label>
              <input required type="text" name="cardNumber" id="cardNumber" autoComplete="off" onChange={this.onChange}  onBlur={this.handleBlur} pattern="[0-9\s]+" maxLength='19' value={this.state.cardInfo.cardNumber}/>
              <div id="numErr" className="error">{this.state.error.cardNumber}</div>
            </div>
            <div className="input">
              <label htmlFor="">CVV</label>
              <input required id='securityCode' type="text" name="securityCode" autoComplete="off"  onBlur={this.handleBlur} onChange={this.onChange} value={this.state.cardInfo.securityCode} pattern="([0-9]{1,})" maxLength='3'/>
              <div id="cvvErr" className="error"></div>
            </div>
            <div className="input">
              <label htmlFor="">Expiration Date</label>
              <select className="expiry" required name="month" id="month"  onBlur={this.handleBlur} value={this.state.cardInfo.month} onChange={this.onChange}>
                <option value="">Month</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select required name="year" id="year" onChange={this.onChange}>
                <option value="">Year</option>
                <option value="2022">22</option>
                <option value="2022">23</option>
                <option value="2022">24</option>
                <option value="2022">25</option>
                <option value="2022">26</option>
                <option value="2022">27</option>
                <option value="2022">28</option>
                <option value="2022">29</option>
                <option value="2022">30</option>
              </select>
            </div>
            <div>
              <button className="backToCart" type="button" onClick={this.goBack}>Go Back</button>
            </div>
          </div>
    )
  }
}

export default PaymentForm