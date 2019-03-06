import React, { Component } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoForm />
        <Todo />
      </div>
    );
  }
}

export default App;
