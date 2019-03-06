import {TODO_ADD, TODO_TOGGLE} from '../actions';

const stateInitial = {
  todos: [
    {
      text: 'Learning Redux',
      id: Date.now(),
      completed: false,
    },

  ]
}


export default (state = stateInitial, action) => {
  switch (action.type) {
    case TODO_ADD:
      const addTodo = {
        text: action.payload,
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todos: [...this.state.todos, addTodo]
      }
      
    case TODO_TOGGLE:
      this.state.todos.forEach(todo => {
        if(todo.id === action.payload) {
          todo.completed = !todo.completed
        }
      })
      return state

    default:
      return state;
  }
}
