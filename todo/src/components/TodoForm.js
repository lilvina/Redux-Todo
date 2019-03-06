import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todoAdd} from '../actions';

class TodoForm extends Component {
  state = {
    todos: ''
  }

  addTodos = event => {
    event.preventDefault()

    this.props.todoAdd(this.state.todos)
    this.setState({
      todos: ''
    })
  }

  handlerChange = event => {
    this.setState({
      todos: event.target.value
    })
  }
  render() {
    return (
      <form name="todo-form" onSubmit={this.addTodos}>
        <input name="text" type="text" onChange={this.handlerChange} placeholder="add my todo" value={this.state.todos} required />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, {todoAdd})(TodoForm);
