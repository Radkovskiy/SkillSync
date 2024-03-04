import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { statusFilters } from "../../components/todos/constants"
import { deleteTodoThunk, getTodosThunk, putTodoThunk, postTodoThunk } from "../thunk";
import { PENDING, FULFILLED, REJECTED } from "../../utils/StatusConstants";

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
  state.status = PENDING
}

const handleGetFulfilled = (state, { payload }) => {
  state.status = FULFILLED
  state.todoArr = payload
  state.error = ''
}
const handlePostFulfilled = (state, { payload }) => {
  state.todoArr = [...state.todoArr, payload]
  state.status = FULFILLED
}
const handlePutFulfilled = (state, { payload }) => {
  state.todoArr = state.todoArr.map(todo =>
    todo.id === payload.id ? payload : todo
  );
  state.status = FULFILLED;
}
const handleDeleteFulfilled = (state, { payload }) => {
  state.todoArr = state.todoArr.filter(todo => todo.id !== payload)
  state.status = FULFILLED;
}
const handleRejected = (state, { payload }) => {
  state.status = REJECTED
  state.error = payload
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    filterByStatus: (state, { payload }) => {
      state.statusFilter = payload
    }
  },
  extraReducers: (builder) => {
    builder
      // .addMatcher(isAnyOf(...generateThunks(pending)), handlePendidng)
      // .addCase(getTodosThunk.pending, handlePendidng)
      .addCase(getTodosThunk.fulfilled, handleGetFulfilled)
      .addCase(postTodoThunk.fulfilled, handlePostFulfilled)
      .addCase(putTodoThunk.fulfilled, handlePutFulfilled)
      .addCase(deleteTodoThunk.fulfilled, handleDeleteFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePendidng)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
  }
})

export const todoSliceReducer = todoSlice.reducer

export const {
  filterByStatus,
} = todoSlice.actions