import React, { Component } from "react";
import ContextChild from "./ContextChild";

function myBind(obj, fn) {
  return function() {
    return fn.apply(obj, arguments);
  };
}

export class Context extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.onClick = myBind(this, this.onClick);
  }

  onClick() {
    console.log("this", this);
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Context</h1>
        <ContextChild onClick={this.onClick} />
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Context;
