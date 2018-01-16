import React, { Component } from 'react'

import { createStore } from 'redux'

import logo from './logo.svg'
import './App.css'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos)

class App extends Component {
  componentWillMount () {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    console.warn(store.getState())
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" onClick={() => {
              store.dispatch({
                type: 'ADD_TODO',
                text: 'Read the docs'
              })
            }} />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    )
  }
}

export default App;
