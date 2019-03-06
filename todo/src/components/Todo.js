import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todoToggle} from '../actions';

//import TodoForm from './components/TodoForm';

class Todo extends Component {
  todoToggle = event => {
    event.target.classList.toggle('completed')

  }
  render() {
    return (
      <ul>
      {this.props.todo.map(todos => {
        return (
          <li key={Date.now()} onClick={this.todoToggle}>
          {todos.text}
          </li>
        )
      })}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todos
})

export default connect(mapStateToProps, {todoToggle})(Todo);
