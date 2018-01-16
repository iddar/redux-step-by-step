import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const List = ({todos, addTodoAction}) => {
    return (
        <div>
            <button onClick={() => {
                addTodoAction('Hola')
            }}>Add</button>
            <ul>
                {todos.map((todo, key) => <li key={key}>{todo}</li> )}
            </ul>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        todos: state.todos
    }
}

function addTodo (txt) {
    return {type: 'add todo', payload: txt}
}

function mapDispatchToProps (dispatch) {
    return {
      // dispatch(addTodo(...))
      addTodoAction: bindActionCreators(addTodo, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)