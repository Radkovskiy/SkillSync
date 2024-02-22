import { createSlice } from "@reduxjs/toolkit"
import { statusFilters } from "../../components/todos/constants"
import { todosTemplate } from "../templateArrs"

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoArr: todosTemplate,
    statusFilter: statusFilters.all,
  },
  reducers: {
    addTodo(state, action) {
      state.todoArr.push(action.payload)
    },
    removeTodo(state, action) {
      state.todoArr = state.todoArr.filter(todo => todo.id !== action.payload);
    },
    /*     
        removeTodo(state, action) {
          console.log('action :>> ', action);
          const result = {
            ...state,
            todoArr: state.todoArr.filter(todo => todo.id !== action.payload.id)
          }
          console.log('result :>> ', result);
          return result
        }, */
    toggleStatus(state, action) {
      const todoId = action.payload;
      const toggledTodo = state.todoArr.find(todo => todo.id === todoId);

      toggledTodo.completed = !toggledTodo.completed;

      /* 
      что значит if (toggledTodo)? к чему это? я понимаю, что если бы я перебирал массив todoArr
      и внутри перебора на каждой итерации проверял каждую тудушку на конкретный элемент массива.
      Но в это случае никакого перебора нет. Каким боком это массив вообще начинает проходить
      проверку?  
      такой синтаксис я бы понял:
      const toggledTodo = state.todoArr.map(todo => {
        if (todo.id === todoId) {
          toggledTodo.completed = !toggledTodo.completed;
        }
      })
      но он не работает
      */
    },
    /*     
        toggleStatus(state, action) {
                return {
            ...state,
            todoArr: state.todoArr.map(todo => {
              if (todo.id === action.payload) {
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }
              return todo
            })
          }
        }, */
    filterByStatus(state, action) {
      state.statusFilter = action.payload
    },
    editName(state, action) {
      const todoId = action.payload.id;
      const editedTodo = state.todoArr.find(todo => todo.id === todoId);

      editedTodo.name = action.payload.value
      /*       
            return {
              ...state,
              todoArr: state.todoArr.map(todo => {
                if (todo.id === action.payload.id) {
                  return { ...todo, name: action.payload.value };
                }
                return todo;
              })
            }; */
    },
    editDescription(state, action) {
      const todoId = action.payload.id;
      const editedTodo = state.todoArr.find(todo => todo.id === todoId);

      editedTodo.description = action.payload.value
      /*       
            return {
              ...state,
              todoArr: state.todoArr.map(todo => {
                if (todo.id === action.payload.id) {
                  return { ...todo, description: action.payload.value };
                }
                return todo;
              })
            }; */
    },
  }
})

export const todoReduser = todoSlice.reducer
export const {
  addTodo,
  removeTodo,
  toggleStatus,
  filterByStatus,
  editName,
  editDescription
} = todoSlice.actions