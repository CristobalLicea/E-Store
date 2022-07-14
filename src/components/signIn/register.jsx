import React from "react";
import './signIn.css'
import eye from '../assets/eye.png'
import { passCheck } from "./signInVal";
import { users } from "../users";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVis: false,
      pConfirmVis: false,
      user: {
        cart: [
          {
            name: 'codeSnippet1',
            price: 299.99,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FYu-Gi-Oh-Monster-LCYW-EN058-Legendary-Collection%2Fdp%2FB009K84X56&psig=AOvVaw0phtDxLDDNJymNyCwbPWN0&ust=1654124140074000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIC-teDqivgCFQAAAAAdAAAAABAF",
            quantity: 4
          },
          {
            name: 'codeSnippet2',
            price: 399.99,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FYu-Gi-Oh-Monster-LCYW-EN058-Legendary-Collection%2Fdp%2FB009K84X56&psig=AOvVaw0phtDxLDDNJymNyCwbPWN0&ust=1654124140074000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIC-teDqivgCFQAAAAAdAAAAABAF",
            quantity: 6
          },
        ]
      }
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({ user: { ...prevState.user, [name]: value } }));
  }

  togglePassVisibility = (e) => {
    if (e.target.name === 'password') {
      this.setState({
        passwordVis: !this.state.passwordVis
      })
    }

    if (e.target.name === 'pConfirm') {
      this.setState({
        pConfirmVis: !this.state.pConfirmVis
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(passCheck(this.state.user.password, this.state.user.passwordConfirm)) {
      users.push(this.state.user)
      console.log(users)
    } else {
      this.setState({
        passErr: "Passwords Do Not Match"
      })
    }
  }

  render() {
    return(
      <div id="signInScreen">
        <form action="" onSubmit={this.onSubmit}>
          <div className="inputSection">
            <label htmlFor="email">Your E-Mail Address * <span id="emailErr" className="errorMsg"></span><br /></label>
            <input onChange={this.onChange} name="email" type="email" value={this.state.value} autoComplete='off' required />

          </div>
          <div className="inputSection">
            <label htmlFor="password">Create Password * <span id="pass" className="errorMsg">{this.state.passErr}</span><br /></label>
            <input className="passField" onChange={this.onChange} name="password" type={this.state.passwordVis ? "text" : "password"} value={this.state.value} autoComplete='off' pattern="(?=.*\d)(?=.*[!@#$%^&*\(\)])(?=.*[a-z])(?=.*[A-Z]).{8,}" minLength='8' maxLength='20' required />
            <p>Password must be 8-20 characters, including: at least one capital letter, at least one small letter, one number and one special character - ! @ # $ % ^ & * () _ +</p>
            <img src={eye} alt="" onClick={this.togglePassVisibility} type="button" name="password" className="eyeIcon"/>
          </div>
          <div className="inputSection">
            <label htmlFor="passwordConfirm">Confirm Password * <span id="confirm" className="errorMsg passSpace"></span><br /></label>
            <input className="passField" onChange={this.onChange} type={this.state.pConfirmVis ? "text" : "password"} name="passwordConfirm" value={this.state.value} autoComplete='off' pattern="(?=.*[0-9])(?=.*[-!@#$%^&*\(\)_+])(?=.*[a-z])(?=.*[A-Z]).{8,}" minLength='8' maxLength='20' required />
            <img src={eye} alt="" onClick={this.togglePassVisibility} type="button" name="pConfirm" className="eyeIcon"/>
          </div>
          <div className="inputSection">
            <label htmlFor="firstName">First Name: <span className="errorMsg" id="fNameErr"></span><br /></label>
            <input onChange={this.onChange} type="text" name="firstName" value={this.state.value} autoComplete='off' pattern="([A-Za-z]{1,})" required />
            
          </div>
          <div className="inputSection">
            <label htmlFor="lastName">Last Name: <span className="errorMsg" id="lNameErr"></span><br /></label>
            <input onChange={this.onChange} type="text" name="lastName" value={this.state.value} autoComplete='off' pattern="([A-Za-z]{1,})" required />
            
          </div>
          <div className="inputSection">
            <label htmlFor="zipcode">Postal Code: <span className="errorMsg" id='zipErr'></span><br /></label>
            <input onChange={this.onChange} type="text" name="zipcode" value={this.state.value} autoComplete='off' pattern="([0-9]{1,})" required />   
          </div>  
          <div className="inputSection">
            <button className="registerBtn">SAVE</button>
          </div>
          <p>or</p>
          <div className="inputSection">
            <button className="facebookRegisterBtn" type="button">Log In With Facebook</button>
          </div>
          </form>
      </div>
    )
  }
}

export default RegisterForm