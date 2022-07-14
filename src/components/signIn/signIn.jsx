import React from "react";
import LogInForm from "./logIn";
import RegisterForm from "./register";
import './signIn.css'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  toggle = (e) => {
    if(e.target.value === 'login') {
      this.setState({
        toggle: false
      })
    } else if (e.target.value === 'register') {
      this.setState({
        toggle: true
      })
    }
  }

  render() {
    return(
      <div className="signIn">

        <div  className="signInOptions">
          <div className="toggleBox"><input onClick={this.toggle} defaultChecked type="radio" name="option" id="login" value='login'/><label htmlFor="login">SIGN IN</label></div>
          <div className="toggleBox"><input onClick={this.toggle} type="radio" name="option" id="register" value='register' /><label htmlFor="register">CREATE ACCOUNT</label></div>
        </div> 
        {this.state.toggle ? (
          <RegisterForm childToParent={this.childToParent}/>
      ) : (
          <LogInForm logIn={this.props.logIn}/>
      )}
      </div>
    )
  }
}

export default SignIn