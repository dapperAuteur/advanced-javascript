import React, { Component } from 'react'

export class Async extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
    // The state.count always seems to be 1 less than what we set it to above. Why?
    console.log('this.state.count', this.state.count)
  }
  
  render() {
    const { count } = this.state
    
    return (
      <div>
        <h2>Async</h2>
        <div>
          <h3>Instructions</h3>
          <p>Click the increment button and look in the console log and see the handleClick method above.</p>
        </div>
        <div>
          <h3>Count</h3>
          Count value is {count}
          {' '}
          <button onClick={this.handleClick}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Async
