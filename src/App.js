import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import List from './List'

function todos (state = [], action) {
  switch (action.type) {
    case 'add todo':
      return [...state, action.payload]
  
    default:
      return state
  }
}

function user (state = {}, action) {
  switch (action.type) {
    case 'set name':
      return {
        ...state,
        name: action.payload
      }
  
    default:
      return state
  }
}

let redeucers = combineReducers({
  todos,
  user
})

let store = createStore(redeucers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo}
              className="App-logo"
              alt="logo"
              />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <List />
        </div>
      </Provider>
    )
  }
}

export default App
