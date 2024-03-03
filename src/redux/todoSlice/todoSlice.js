import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { statusFilters } from "../../components/todos/constants"
import { deleteTodoThunk, getTodosThunk, putTodoThunk, postTodoThunk } from "../thunk";


const { pending, fulfilled, rejected } = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
}
/* 
const thunkArr = [getTodosThunk, postTodoThunk, deleteTodoThunk]
const generateThunks = status => thunkArr.map(el => el[status]) */

const initialState = {
  todoArr: [],
  statusFilter: statusFilters.all,
  status: 'init',
  error: ''
}

const handlePendidng = (state) => {
  state.status = pending
}

const handeGetFulfilled = (state, { payload }) => {
  state.status = fulfilled
  state.todoArr = payload
  state.error = ''
}
const handePostFulfilled = (state, { payload }) => {
  state.todoArr = [...state.todoArr, payload]
  state.status = fulfilled
}
const handePutFulfilled = (state, { payload }) => {
  state.todoArr = state.todoArr.map(todo =>
    todo.id === payload.id ? payload : todo
  );
  state.status = 'fulfilled';
}
const handeDeleteFulfilled = (state, { payload }) => {
  state.todoArr = state.todoArr.filter(todo => todo.id !== payload)
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
      // .addCase(getTodosThunk.pending, handlePendidng)
      .addCase(getTodosThunk.fulfilled, handeGetFulfilled)
      .addCase(postTodoThunk.fulfilled, handePostFulfilled)
      .addCase(putTodoThunk.fulfilled, handePutFulfilled)
      .addCase(deleteTodoThunk.fulfilled, handeDeleteFulfilled)
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

// сделать лоадер