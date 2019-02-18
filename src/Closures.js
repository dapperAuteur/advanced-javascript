import React, { Component } from 'react'
import Toggle from './Toggle'

export class Closures extends Component {
  constructor() {
    super()
    this.state = {
      toggleValue: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState({ toggleValue: !this.state.toggleValue })
  }
  
  render() {
    const { toggleValue } = this.state
    
    return (
      <div>
        <h2>Closures</h2>
        <div>
          <h3>Instructions 1</h3>
          <p>You've seen this before. But see it in a new light. We give a function as a prop to a child component. That child component doesn't have direct access to any scope in this component. But we give it a closure: controlled access to scope that it doesn't normally have access to. We control that scope, and we say "When you call this function, I'll update my state in a certain way. That's the only thing I'll do. You can't do anything but what I let you."</p>
          <Toggle value={toggleValue} onToggle={this.handleClick} />
        </div>
        <div>
          <h3>Instructions 2</h3>
          <p>Use Axios. Fetch some data. In your .then, do this.setState. (Seriously go do it and then look at it.) Congrats, that's a closure.</p>
        </div>
      </div>
    )
  }
}

export default Closures
