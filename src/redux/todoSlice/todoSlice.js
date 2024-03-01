import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { statusFilters } from "../../components/todos/constants"
import { deleteTodoThunk, getTodosThunk, postTodoThunk } from "../thunk";


const { pending, fulfilled, rejected } = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
}
const thunkArr = [getTodosThunk, postTodoThunk, deleteTodoThunk]

const generateThunks = status => thunkArr.map(el => el[status])

const initialState = {
  todoArr: [],
  statusFilter: statusFilters.all,
  status: 'init',
  error: ''
}

const handlePendidng = (state) => {
  state.status = pending
}

const handeFulfilled = (state, { payload }) => {
  state.status = fulfilled
  state.todoArr = payload
  state.error = ''
}

const handleRejected = (state, { payload }) => {
  state.status = rejected
  state.error = payload
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers: (builder) => {
    builder
      // .addMatcher(isAnyOf(...generateThunks(pending)), handlePendidng)
      // .addMatcher(isAnyOf(...generateThunks(fulfilled)), handeFulfilled)
      // .addMatcher(isAnyOf(...generateThunks(rejected)), handleRejected)
      // .addMatcher(isAnyOf([getTodosThunk.pending]), handlePendidng)
      // .addMatcher(isAnyOf([getTodosThunk.fulfilled]), handeFulfilled)
      // .addMatcher(isAnyOf([getTodosThunk.rejected]), handleRejected)
      // .addCase(getTodosThunk.pending, handlePendidng)
      // .addCase(getTodosThunk.rejected, handleRejected)
      // .addCase( postTodoThunk.rejected, handleRejected)
      // .addCase( postTodoThunk.pending, handlePendidng)
      .addCase(getTodosThunk.fulfilled, handeFulfilled)
      .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
        state.todoArr = state.todoArr.filter(todo => todo.id !== payload)
      })
      .addCase(postTodoThunk.fulfilled, (state, { payload }) => {
        state.todoArr = [...state.todoArr, payload]
        state.status = fulfilled
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePendidng)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
  }
})

export const todoSliceReducer = todoSlice.reducer

export const {
  addTodo,
  removeTodo,
  toggleStatus,
  filterByStatus,
  editName,
  editDescription
} = todoSlice.actions