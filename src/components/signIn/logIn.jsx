import React from "react";
import './signIn.css'
import eye from '../assets/eye.png'
import { loadUser, logInCheck } from "./signInVal";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passVis: false,
      user: { email: '', password: ''}
    }
  }

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({ user: { ...prevState.user, [name]: value } }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const user = this.state.user
    if (logInCheck(user.email, user.password)) {
      const activeUser = loadUser(user.email);
      this.props.logIn(activeUser)
    } else {
      console.log('Log In Failed')
    }
  }

  togglePassVisibility = (e) => {
    if (e.target.name === 'password') {
      this.setState({
        passVis: !this.state.passVis
      })
    }
  }

  render() {
    return(
      <div id="signInScreen">
        <form action="" onSubmit={this.onSubmit}>
          <div className="inputSection">
            <label htmlFor="">Your E-Mail Address * <br /></label>
            <input onChange={this.onChange} type="email" name="email" value={this.state.value} autoComplete='off' required />
          </div>
          <div className="inputSection">
            <label htmlFor="">Password * <br /></label>
            <input onChange={this.onChange} name="password" type={this.state.passVis ? "text" : "password"} value={this.state.value} autoComplete='off' required minLength='8' maxLength='20'/>
            <img src={eye} alt="" onClick={this.togglePassVisibility} type="button" name="password" className="eyeIcon"/>
          </div>
          <div className="inputSection">
            <button className={this.state.user.password.length && this.state.user.email.length ? "logInBtn" : "logInBtnOff"}>Log In</button>
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

export default LogInForm