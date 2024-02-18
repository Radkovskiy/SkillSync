import { searchValueReducer } from "./searchValueSlice/searchValueSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReduser } from "./todoSlice/todoSlice";
import { contactsReduser } from "./contactsSlice/contactsSlice";

const rootReducer = combineReducers({
  todo: todoReduser,
  contacts: contactsReduser,
  filterValue: searchValueReducer
})

export const store = configureStore({
  reducer: rootReducer
});

/* 
const addTodo = createAction('addTodo')
const removeTodo = createAction('removeTodo')
const toggleStatus = createAction('toggleStatus')
const filterByValue = createAction('filterByValue')
const filterByStatus = createAction('filterByStatus')
const editName = createAction('editName')
const editDescription = createAction('editDescription')

const myReducer = createReducer(todosTemplate, {
  [addTodo]: (state, action) => {
    return [...state, action.payload];
  },
  [removeTodo]: (state, action) => {
    return {
      ...state,
      todoArr: state.todoArr.filter(todo => todo.id !== action.payload.id)
    }
  },
  [toggleStatus]: (state, action) => {
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
  },
  [filterByValue]: (state, action) => {
    return {
      ...state,
      searchValue: action.payload.value
    }
  },
  [filterByStatus]: (state, action) => {
    return {
      ...state,
      statusFilter: action.payload.filter,
    }
  },
  [editName]: (state, action) => {
    return {
      ...state,
      todoArr: state.todoArr.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.value };
        }
        return todo;
      })
    };
  },
  [editDescription]: (state, action) => {
    return {
      ...state,
      todoArr: state.todoArr.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, description: action.payload.value };
        }
        return todo;
      })
    };
  },
  
});

export const store = configureStore({
  reducer: {
    todoArr: myReducer
  }
}) */

/* 
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
    case 'removeContact':
      return {
        ...state,
        contacts: {
          contactsArr: state.contacts.contactsArr.filter(contact =>
            contact.id !== action.payload.id
          ),
          newName: state.contacts.newName,
          newNumber: state.contacts.newNumber
        }
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

    case 'setName':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          newName: action.payload.name
        }
      }

    case 'setNumber':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          newNumber: action.payload.number
        }
      }

    case 'addContact':
      return {
        ...state,
        contacts: {
          contactsArr: [...state.contacts.contactsArr, action.payload],
          newName: '',
          newNumber: ''
        }
      }

    default:
      return state;
  }

 
//   const addtodo = () => {
//    return {
//      ...state,
//      todoArr: [...state.todoArr, action.payload]
//    }
//  }

//  const actionRedusers = {
//    addtodo
//  }

//  const fn = actionRedusers[action.type]

}

export const store = createStore(reducer, {
  todoArr: todosTemplate,
  statusFilter: statusFilters.all,
  contacts: {
    contactsArr: contactsTemplate,
    newName: '',
    newNumber: '',
  },
  searchValue: '',
  counterResult: 0
})
 */






