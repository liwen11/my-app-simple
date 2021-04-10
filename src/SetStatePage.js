import React, { Component } from "react";
export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  changeValue = v => {
    this.setState({
      counter: this.state.counter + v
    });
    console.log("counter", this.state.counter);
  };
  setCounter = () => {
    this.changeValue(1);
    //this.changeValue(2);
    //console.log("counter", this.state.counter);
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{counter}</button>
      </div>
    );
  }
}