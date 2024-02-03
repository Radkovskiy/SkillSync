import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todoArr: [...state.todoArr, action.payload]
      }

    case 'removeTodo':
      // console.log('action.payload.id :>> ', action.payload.id);
      return {
        ...state,
        todoArr: state.todoArr.filter(todo => todo.id !== action.payload.id)
      }

    case 'filter':
      return {
        ...state,
        searchValue: action.payload.value
      }

    default:
      return state;
  }
}

export const store = createStore(reducer, {
  todoArr: [{
    name: 'car',
    description: 'qweqweqwe',
    id: 1
  },
  {
    name: 'cat',
    description: 'asdasdasd',
    id: 2
  },
  {
    name: 'tag',
    description: 'zxczxczxc',
    id: 3
  }
  ], contacts: [], searchValue: '', counterResult: 0
})

console.log(store.getState());