import React, { Component } from "react";

class Calculadora extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  somar = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  subtrair = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  render() {
    return (
      <>
        <h1>Calculadora</h1>
        <h2>{this.state.n1}</h2>
        <h2>{this.state.n2}</h2>
        <input type="number" onChange={this.handleChange} />
        <input type="number" onChange={this.handleChange2} />
        <button onClick={this.somar}>+</button>
      </>
    );
  }
}
export default Calculadora;
