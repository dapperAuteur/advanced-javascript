import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './Header'
import References from './References'
import Async from './Async'
import Closures from './Closures'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route path="/" exact render={() => (
          <div>
            <div>Click a nav link</div>
          </div>
        )} />
        <Route path="/references" component={References} />
        <Route path="/async" component={Async} />
        <Route path="/closures" component={Closures} />
      </div>
    );
  }
}

export default App;
