
import React from 'react'
import { connect } from 'react-redux'

const List = ({todos}) => {
    console.warn(todos)
    return (
        <ul>
            {todos.map((todo, key) => <li key={key}>{todo}</li>)}
        </ul>
    )
}

function mapStateToProps (state) {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps)(List)