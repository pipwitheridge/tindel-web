import React from "react";
import { Input } from "react";
import { Form } from "react-bootstrap";

class InputGrow extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      height: 40,
      
    }
  }



  updateSize = (height) => {
    this.setState({
      height
    });
  }

  render () {
    const {height} = this.state;

    let newStyle = {
      height
    }


    return (
      
    <Form
      
    />
    
    )
  }

}

export default InputGrow; 