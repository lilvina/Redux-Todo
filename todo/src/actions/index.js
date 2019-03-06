export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';

export const todoAdd = todo => ({ type: TODO_ADD, payload: todo })
export const todoToggle = id => ({ type: TODO_TOGGLE, payload: id})
