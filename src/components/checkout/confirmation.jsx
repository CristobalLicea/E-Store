import React from "react";
import './shipping.css'
import confirm from '../assets/confirm.png'


class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClick = () => {
    this.props.home()
  }

  render(){
    return(
          <div className="form confirm">
            <div id="confirmBox">
              <img src={confirm} alt="" />
              <h1>Congratulations</h1>
              <h2>Payment of ${((this.props.subtotal - this.props.discount) + this.props.priority).toFixed(2)} Received</h2>
              <p>ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate ducimus maiores consequatur nemo maxime! Suscipit aliquam fuga maiores iure quo pariatur ratione ipsam, consectetur nostrum, incidunt, accusamus fugiat doloribus.</p>
              <button className="endbutton" type="button">Track Order</button><br />
              <button onClick={this.onClick} className="endbutton" type="button">Return to Home Page</button>
            </div>
          </div> 
    )
  }
}

export default Confirmation