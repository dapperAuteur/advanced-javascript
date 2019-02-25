import React, { Component } from 'react'
import ContextChild from './ContextChild'

export class Context extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    // this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    return (
      <div>
        <h1>Context</h1>
        <ContextChild onClick={this.onClick} />
        <div>Counter: {this.state.counter}</div>
      </div>
    )
  }
}

export default Context
