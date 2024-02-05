import { createStore } from "redux";
import { statusFilters } from "../components/todos/constants";
import { todosTemplate } from "../components/todos/templateTodo";

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
        statusFilter: action.payload.filter,
      }

    case 'editDescription':
      return {
        ...state,
        todoArr: state.todoArr.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, description: action.payload.value };
          }
          return todo;
        })
      };

    case 'editName':
      return {
        ...state,
        todoArr: state.todoArr.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, name: action.payload.value };
          }
          return todo;
        })
      };


    default:
      return state;
  }
}

export const store = createStore(reducer, {
  todoArr: todosTemplate,
  statusFilter: statusFilters.all,
  contacts: [],
  searchValue: '',
  counterResult: 0
})

console.log('state :>> ', store.getState());
