import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }

    default:
      return state;
  }
}

export const store = createStore(reducer, { todoList: [], contacts: [], counterResult: 0 })

store.dispatch({ type: 'addTodo', payload: { nameTodo: 'qweqwe', descr: 'eqweqw' } })
console.log(store.getState());