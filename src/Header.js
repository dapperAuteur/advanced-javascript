import React, { Component } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1>Advanced JavaScript</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/references">References</NavLink>
          <NavLink to="/async">Async</NavLink>
          <NavLink to="/closures">Closures</NavLink>
          <NavLink to="/context">Context</NavLink>
          <NavLink to="/render-props">Render Props</NavLink>
          <NavLink to="/cors">Cors</NavLink>
        </nav>
      </header>
    )
  }
}

export default Header
