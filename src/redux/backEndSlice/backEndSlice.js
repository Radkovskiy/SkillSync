import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backEnd: [],
  status: 'idle',
  error: ''
}

const backEndSlice = createSlice({
  name: 'backEndTest',
  initialState,
  reducers: {
    fetching: state => state.status = 'pending',
    fetchSuccess: (state, { payload }) => {
      state.status = 'fulfilled'
      state.backEnd = payload
      state.error = ''
    },
    fetchError: (state, { payload }) => {
      state.status = 'rejected'
      state.error = payload
    }
  }
})

export const backReducer = backEndSlice.reducer
export const {
  fetching,
  fetchSuccess,
  fetchError
} = backEndSlice.actions