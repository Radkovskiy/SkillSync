import { createStore } from "redux";
import { statusFilters } from "../components/todos/constants";

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todoArr: [...state.todoArr, action.payload]
      }

    case 'removeTodo':
      return {
        ...state,
        todoArr: state.todoArr.filter(todo => todo.id !== action.payload.id)
      }

    case 'toggleStatus':
      return {
        ...state,
        todoArr: state.todoArr.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }

    case 'filterByValue':
      return {
        ...state,
        searchValue: action.payload.value
      }

    case 'filterByStatus':
      return {
        ...state,
        status: action.payload.filter,
      }

    default:
      return state;
  }
}

export const store = createStore(reducer, {
  todoArr: [{
    name: 'car',
    description: 'qweqweqwe',
    completed: false,
    id: 1
  },
  {
    name: 'cat',
    description: 'asdasdasd',
    completed: true,
    id: 2
  },
  {
    name: 'tag',
    description: 'zxczxczxc',
    completed: false,
    id: 3
  }
  ], status: statusFilters.all, contacts: [], searchValue: '', counterResult: 0
})

console.log('state :>> ', store.getState());