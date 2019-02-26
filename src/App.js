import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './Header'
import References from './References'
import Async from './Async'
import Closures from './Closures'
import Context from './Context'
import RenderProps from './RenderProps'
import Cors from './Cors'

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
        <Route path="/context" component={Context} />
        <Route path="/render-props" render={() => {
          if (true) {
            return <RenderProps />
          } else {
            return <div>It's false so I'm rendering this!</div>
          }
        }} />
        <Route path="/cors" component={Cors} />
      </div>
    );
  }
}

export default App;
