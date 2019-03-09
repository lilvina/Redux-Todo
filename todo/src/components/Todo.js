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
      {this.props.todoList.map(todo => {
        return (
          <li key={todo.id} onClick={this.todoToggle}>
          {todo.text}
          </li>
        )
      })}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todos
})

export default connect(mapStateToProps, {todoToggle})(Todo);
