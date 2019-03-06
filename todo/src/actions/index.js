export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';

export const todoAdd = text => ({ type: TODO_ADD, text })
export const todoToggle = id => ({ type: TODO_TOGGLE, id})
