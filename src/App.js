import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import logo from './logo.svg'
import './App.css'
import List from './list'

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
  render() {
    return (
      <Provider store={store}>
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

          <List />
        </div>
      </Provider>
    )
  }
}

export default App;
